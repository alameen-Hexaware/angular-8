import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//   template: `
//     Employee Name : 
//         <input [value]="empName" (input)="empName=$event.target.value"/> 
//     <br/>
//     <br/>
//     Employee Id : 
//         <input [(ngModel)]='empName'/> 
//     <br/>
//     <br/>
//         {{empName}}
// `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Angular8Pro';
  empName: string = 'Alameen';
  empId = 35745;
  projectId: number[] = [1, 2, 3];
  employeeDetails: any = [
    { eid: '1', ename: 'Anu', email: 'anu@gmail.com' },
    { eid: '2', ename: 'Asif', email: 'asif@gmail.com' }
  ];

}
