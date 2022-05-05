import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  myColor=0;
  maths:any;
  physics:any;
  chemistry:any;
  percenatageCal:number =0;
  result:any =100;

  constructor() { }

  ngOnInit(): void {
  }

  calulate(){
    this.percenatageCal = ((parseInt(this.maths) +parseInt(this.physics)+parseInt(this.chemistry))/300)*100;
     
  }

}
