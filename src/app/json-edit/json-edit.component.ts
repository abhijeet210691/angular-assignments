import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-json-edit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.scss']
})
export class JsonEditComponent implements OnInit {
  editProduct: any;
  jsonForm:any;

  constructor(private _activeRouter:ActivatedRoute, private _sharedService:SharedService, private _route:Router) { }

  ngOnInit(): void {

    this.jsonForm = new FormGroup({
      pName: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
    })

    console.log(this._activeRouter.snapshot.params['id']);

    this._sharedService.editProduct(this._activeRouter.snapshot.params['id']).subscribe(res => {
      this.editProduct = res;
      console.log(res);
      
      this.jsonForm.controls["pName"].setValue(this.editProduct.pName);
      this.jsonForm.controls["description"].setValue(this.editProduct.description);
      this.jsonForm.controls["price"].setValue(this.editProduct.price);

    })
  }

  productForm(){

    this._sharedService.putProduct(this._activeRouter.snapshot.params['id'], this.jsonForm.value).subscribe(res => {
      console.log(res);
      
      this._route.navigate(['json-service'])
    })
    console.log(this.jsonForm.value);
    
  }

}
