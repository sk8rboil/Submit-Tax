import { Component } from '@angular/core';
import { User } from '../inputModel';

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

  calculate(){
/*     let x =  this.userModel.saleamount;
    let y : number = + x;
    console.log(y); */
    console.log("blur");
    let getdata = this.userModel.saleamount * 0.07;
    console.log(getdata);
    return getdata;
    
  }


}
