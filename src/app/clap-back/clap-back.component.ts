import { Component, OnInit } from '@angular/core';
import { ClapBackGptService } from '../services/clap-back-gpt.service';

@Component({
  selector: 'app-clap-back',
  templateUrl: './clap-back.component.html',
  styleUrl: './clap-back.component.css'
})
export class ClapBackComponent implements OnInit {

  constructor(
    private _clapBackService: ClapBackGptService
  ) { }

  ngOnInit(): void {
    this._clapBackService.getChatGPTResponse("What is the capital of France?")
    .then(response => console.log(response))
    .catch (error => console.error("Error:", error.message));

    this._clapBackService.askGPT()
    .then(res => {
      console.log(res)
    });
  }
}
