import { Component, Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatStepperIntl} from '@angular/material/stepper';
import { User } from '../inputdetail/taxData';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{provide: MatStepperIntl, useClass: MatStepperIntl}],
})
export class StepperComponent{
  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) {}

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }

  userModel = new User('0','Jan','2022','','','','','');

  months = ['January','Feb','Mar','April','May','June','July','August','Sep','Oct','November','December'];

  years = ['2020','2021','2022'];

  topics = ['Angular','React','Vue'];

  currentValue = 0;
  surchargeValue = 0;
  penalty = 200.00;
  totaofvat = 0;

  calculate(getdata: any){
/*  let x =  this.userModel.saleamount;
    let y : number = + x;
    console.log(y); */
    console.log("blur");
    getdata = this.userModel.saleamount * 0.07;
    console.log(getdata);
    this.currentValue = getdata;
    this.surchargeValue = this.currentValue * 0.1;
    this.totaofvat = getdata + this.surchargeValue + this.penalty;

  }

  onSubmit(){
    console.log(this.userModel);
  }
}
