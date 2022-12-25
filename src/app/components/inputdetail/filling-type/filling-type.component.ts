import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../taxData';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filling-type',
  templateUrl: './filling-type.component.html',
  styleUrls: ['./filling-type.component.css']
})

export class FillingTypeComponent {
  
/*   @Output() testevent = new EventEmitter(); */

/*   changeState(value: string){
    console.log(" Value is : ", value );
    return value;
  } */

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

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

/*   testNumberChange(){
    console.log("gasd");
  } */




}
