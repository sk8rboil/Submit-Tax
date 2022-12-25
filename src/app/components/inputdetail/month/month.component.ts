import { Component } from '@angular/core';

/* interface Food {
  value: string;
  viewValue: string;
} */

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
/*   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ]; */

  months = ['January','Feb','Mar','April','May','June','July','August','Sep','Oct','November','December'];

  years = ['2020','2021','2022'];

  topics = ['Angular','React','Vue'];


}
