import { Component } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-directive';
  ifattr: any;
  fdata = [
    {
      'empID': 987645,
      'empName': 'Ragu'
    },
    {
      'empID': 878787,
      'empName': 'Rajagopal'
    }
  ];

  people: any[] = [
    {
      'name': 'Douglas  Pace',
      'age': 35,
      'country': 'MARS'
    },
    {
      'name': 'Mcleod  Mueller',
      'age': 32,
      'country': 'USA'
    },
    {
      'name': 'Day  Meyers',
      'age': 21,
      'country': 'HK'
    },
    {
      'name': 'Aguirre  Ellis',
      'age': 34,
      'country': 'UK'
    },
    {
      'name': 'Cook  Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];


constructor() {
  this.ifattr = true;
  console.log(this.fdata);
}

darkviolet(value) {
alert(value);
}

}
