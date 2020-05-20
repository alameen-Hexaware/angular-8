import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  serviceFun():string{
    return "Welcome to Angualar Service";
  }
}
