import { Component } from '@angular/core';

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
  

  changeState(value: string){
    console.log(" Value is : ", value );
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];



}
