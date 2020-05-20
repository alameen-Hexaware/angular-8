import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  EmployeeName : string;
  EmployeeId : string;
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.EmployeeName = this.actRoute.snapshot.params["ename"];
    this.EmployeeId = this.actRoute.snapshot.params["eid"];
  }

}
