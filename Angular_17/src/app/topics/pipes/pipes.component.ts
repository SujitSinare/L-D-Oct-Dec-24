import { AsyncPipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from './na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [NaPipe, AsyncPipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  demoText: string = "This is a demo text.";

  amount: number = 1500;

  currentDate: Date = new Date();

  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name: 'Sujit',
    city: 'Pune',
    empId: 131,
    state: undefined
  };

  constructor(){
    this.currentTime= interval(1000).pipe(map(() => new Date()));
  }

}
