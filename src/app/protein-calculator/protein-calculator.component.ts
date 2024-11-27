import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-protein-calculator',
  templateUrl: './protein-calculator.component.html',
  styleUrls: ['./protein-calculator.component.css'] // Corrected key name
})
export class ProteinCalculatorComponent implements OnInit {
  proteinForm: FormGroup;
  totalOutput = 0;
  hours: number = 0;
  completionTime?: Date; // To store the calculated completion date and time
  private readonly localStorageKey = 'proteinFormValues';

  constructor(private fb: FormBuilder) {
    this.proteinForm = this.fb.group({
      pfi: [0],
      pfii: [0],
      pfiii: [0],
      pfiv: [0],
      pfWP: [0],
      currentP: [0],
      requiredP: [0]
    });
  }

  ngOnInit(): void {
    const savedValues = localStorage.getItem(this.localStorageKey);
    if (savedValues) {
      this.proteinForm.patchValue(JSON.parse(savedValues));
      this.updateTotalOutput();
    }

    this.proteinForm.valueChanges.subscribe(() => {
      this.updateTotalOutput();
      this.saveFormValues();
    });
  }

  private updateTotalOutput(): void {
    const { pfi, pfii, pfiii, pfiv, pfWP, currentP, requiredP } = this.proteinForm.value;
    this.totalOutput = pfi + pfii + pfiii + pfiv + pfWP;

    let deltaP = requiredP - currentP;
    this.hours = this.totalOutput > 0 ? deltaP / this.totalOutput : 0;

    // Calculate the completion time if hours is valid
    if (this.hours > 0) {
      const currentTime = new Date();
      this.completionTime = new Date(currentTime.getTime() + this.hours * 3600000);
    } else {
      this.completionTime = undefined;
    }
  }

  private saveFormValues(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.proteinForm.value));
  }

  setAlarm(): void {
    if (this.completionTime) {
      const alarmTime = this.completionTime.toLocaleString();
      alert(`Alarm set for ${alarmTime}`);
    } else {
      alert('Invalid completion time. Please check your input.');
    }
  }

  clearForm(){
    this.proteinForm.reset();
  }
}
