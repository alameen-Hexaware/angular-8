import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
