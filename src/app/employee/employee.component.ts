import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,
              private router:Router,
              private empService:EmployeeService) { }

  username:string;
  uname : string;
  msg : string;



  ngOnInit(): void {
    this.username = localStorage.getItem("user");
    this.uname = this.actRoute.snapshot.params["uname"];
    this.msg = this.empService.serviceFun();
  }

  email = new FormControl('');

  updateEmail(){
    this.email.setValue('tharun@hexa.com');
  }

  empForm = new FormGroup({
    eid: new FormControl(null,[Validators.required,Validators.minLength(4)]),
    ename: new FormControl(null,Validators.required)
  });

  

  empfun(){
    console.log("Submited")
    this.router.navigate(["viewemp",this.empForm.get("ename").value,this.empForm.get("eid").value]);
  }
}
