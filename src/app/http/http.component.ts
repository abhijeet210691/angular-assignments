import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  data: any;

  constructor( private _httpRes:HttpClient) { }


  ngOnInit(): void {
    this._httpRes.get('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=21&district_id=395&date=2022-03-09').subscribe(res =>{
      this.data = res 
      
    })
  }

}
