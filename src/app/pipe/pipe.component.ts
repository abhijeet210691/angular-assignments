import { Component, OnInit } from '@angular/core';
import { Train } from './orderby';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  sortId:boolean = true;
  colName="";
  constructor() { }

  ngOnInit(): void {
  }

  
  trainArray=[
    {
      trainId:28937,
      trainType:"Express",
      trainRoute:"nagpur to mumbai",
      trainTicket:3000,
      myDate:new Date()
    }
  ]

  trainDetails=[
    new Train(900, 'Local', 'Pune', 333),
    new Train(700, 'Local', 'Mumbai', 777),
    new Train(300, 'Local', 'Mumbai', 345),
    new Train(600, 'Local', 'Mumbai', 678),
  ]

  sortBy(data:any){
    this.colName=data;
    this.sortId = !this.sortId
    console.log(this.sortId);
  }

}
