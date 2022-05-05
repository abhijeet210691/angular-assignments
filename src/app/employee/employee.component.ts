import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  EmpArray=[
    new Employee(101,"shubham","pune",9673770139,"shubham@gmail.com",20000),
    new Employee(102,"abhijeet","nagpur",999999999,"abhijeet@gmail.com",10000),
    new Employee(103,"akshay","mumbai",888888888,"akshay@gmail.com",80000),
    new Employee(104,"atul","thane",7777777777,"atul@gmail.com",30000),
    new Employee(105,"amol","latur",96737454554,"amol@gmail.com",50000),
    new Employee(106,"pravin","satara",896437445,"pravin@gmail.com",10000),
    new Employee(107,"pramod","sangali",734674237,"pramod@gmail.com",20000),
    new Employee(108,"suraj","solapur",9764546454,"suraj@gmail.com",40000),
    new Employee(109,"shrikant","kolhapur",8645674354,"shrikant@gmail.com",20000),
    new Employee(110,"sachin","nashik",776437454364,"sachin@gmail.com",50000),
  
   ];

}

class Employee{
  empId:number;
  empName:string;
  empAddress:string;
  empPhone:number;
  empEmail:string;
  empSalary:number;
 
  constructor(empId:number,empName:string,empAddress:string,empPhone:number,empEmail:string,empSalary:number){
    this.empId=empId;
    this.empName=empName;
    this.empAddress=empAddress;
    this.empPhone=empPhone;
    this.empEmail=empEmail;
    this.empSalary=empSalary;
 
  }
}
