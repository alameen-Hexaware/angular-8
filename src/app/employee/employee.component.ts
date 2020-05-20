import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute) { }

  username:string;
  uname : string;

  ngOnInit(): void {
    this.username = localStorage.getItem("user");
    this.uname = this.actRoute.snapshot.params["uname"];
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
  }
}
