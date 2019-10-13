import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kello',
  templateUrl: './kello.component.html',
  styleUrls: ['./kello.component.css']
})
export class KelloComponent implements OnInit {

  time = new Date();

  timeIntervalId;

  constructor() { }

  ngOnInit() {

    this.timeIntervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  ngOnDestroy(){
    clearInterval(this.timeIntervalId);
  }

}
