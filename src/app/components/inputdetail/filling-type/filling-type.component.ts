import { Component } from '@angular/core';
import { User } from './filling-type-model';

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

  userModel = new User('0','');



}
