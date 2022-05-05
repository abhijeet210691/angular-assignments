import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  isUpdate:boolean = false;
  isSubmit:boolean = true;
    updateIndex:number | undefined;
  crudForm: FormGroup | any;
  fName:any;
  studentArray: any = [
    new studentDetails('Abhijeet', 'Abhi', 'abhijeet@gmail.com', 1),
    new studentDetails('Shubhan', 'Babalu', 'shubham@gmail.com', 2),
    new studentDetails('Akashay', 'Akki', 'akashay@gmail.com', 3),
  ];
  constructor(private _httpService:SharedService) { }

  ngOnInit(): void {
    this.crudForm = new FormGroup({
      fName: new FormControl("", Validators.required),
      nickName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      rollNumber: new FormControl("", Validators.required)
    })
  }

  studentForm() {
    this.studentArray.push(this.crudForm.value);
    this.crudForm.reset();
    console.log(this.studentArray);
  }

  // searchName(e:any){
    
  //   if(e.target.value == ""){
  //     console.log(e.target.value, "worked")
  //     this.studentArray = this.studentArray
  //   }else{
  //     this.studentArray = this.studentArray.filter((res:any) =>{
  //       return res.fName.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase())
  //     })

  //   }
  // }

  deleteStudent(e:number){
    confirm("Do you want to delete")
    this.studentArray.splice(e,1)
    setTimeout(() => {
      alert("Student deleted");
    }, 200);
  }

  editStudent(e:number){
    this.updateIndex = e;
    this.crudForm.controls["fName"].setValue(this.studentArray[e].fName);
    this.crudForm.controls["nickName"].setValue(this.studentArray[e].nickName);
    this.crudForm.controls["email"].setValue(this.studentArray[e].email);
    this.crudForm.controls["rollNumber"].setValue(this.studentArray[e].rollNumber);
    this.isUpdate = true;
    this.isSubmit = false;
  }

  updateStudent(){
    this.studentArray.splice(this.updateIndex,1);
    this.studentArray.splice(this.updateIndex, 0 , this.crudForm.value);
    this.crudForm.reset();
    this.isUpdate = false;
    this.isSubmit = true;
  }

}

class studentDetails {
  fName: string;
  nickName: string;
  email: string;
  rollNumber: number;

  constructor(fName: string, nickName: string, email: string, rollNumber: number) {
    this.fName = fName;
    this.nickName = nickName;
    this.email = email;
    this.rollNumber = rollNumber;
  }
}
