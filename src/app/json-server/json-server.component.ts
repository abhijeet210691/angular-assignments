import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-json-server',
  templateUrl: './json-server.component.html',
  styleUrls: ['./json-server.component.scss']
})
export class JsonServerComponent implements OnInit {

  products:any;
  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
   this.getAllproducts();
  }

  getAllproducts(){
    this._sharedService.getProducts().subscribe(res => {
      this.products = res;      
    })
  }

  deleteProduct(id:any){
    this._sharedService.deleteProduct(id).subscribe(res => {

    })
    
    this.getAllproducts();
  }

}
