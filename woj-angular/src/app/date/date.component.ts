import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = "Tänään on " + new Date().toLocaleDateString("fi-FI");

}
