import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapBackComponent } from './clap-back.component';

describe('ClapBackComponent', () => {
  let component: ClapBackComponent;
  let fixture: ComponentFixture<ClapBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClapBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClapBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
