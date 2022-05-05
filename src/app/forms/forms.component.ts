import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  invalidField={
    border:'2px solid red'
  }
  validField={
    border:'2px soild green'
  }
  regForm:any;
  strongPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$";
  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      fname : new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z]*$')]),
      email: new FormControl("", [Validators.required, Validators.email]),
 
      contactNumber: new FormControl("", [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      age : new FormControl("", [Validators.required, Validators.min(16), Validators.max(56)]),
      setUsername: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,15}$')]),
      setPassword: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern(this.strongPattern)]),
      confirmPassword: new FormControl("", Validators.required)
    },
      {validators: this.passwordMatch},
    )
  }

  get f(){
    return this.regForm.controls;
  }


  regSubmit(){
    console.log(this.regForm.value, 'form');
  }

   passwordMatch(rForm:AbstractControl):any {
    let pass = rForm.get('setPassword')?.value;
    let cpass = rForm.get('confirmPassword')?.value;
    if(pass == cpass){
      return null;
    }
       // validation passed
    else{
      return { 'mismatch':true};
    }
       
  }

}
