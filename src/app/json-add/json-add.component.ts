import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-json-add',
  templateUrl: './json-add.component.html',
  styleUrls: ['./json-add.component.scss']
})
export class JsonAddComponent implements OnInit {

  jsonForm:any;
  constructor(private _sharedService:SharedService, private router:Router) { }

  ngOnInit(): void {
    this.jsonForm = new FormGroup({
      pName: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
    })

  }

  productForm(){
    this._sharedService.postProduct(this.jsonForm.value).subscribe(res => {
      console.log(res);
    })
    this.router.navigate(['/json-service']);
  }

  

}
