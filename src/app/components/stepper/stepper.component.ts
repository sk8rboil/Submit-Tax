import { Component, Injectable } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
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

  YearFormControl = new FormControl('', Validators.required);
  MonthFormControl = new FormControl('', Validators.required);
  TypeFormControl = new FormControl('', Validators.required);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
  


  userModel = new User('','','','','','','','');

  months = ['January','Feb','Mar','April','May','June','July','August','Sep','Oct','November','December'];

  years = ['2020','2021','2022'];

  type = ['one-time','data','data'];

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
