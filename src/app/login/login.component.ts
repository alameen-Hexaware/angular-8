import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  LoginFunction(loginform){
    console.log("Login is Successful!");
    
    console.log(loginform.value);
  
    this.user = loginform.value.username;

    localStorage.setItem("user",this.user);
    
    console.log("User Name: "+this.user);
    if(this.user == "ameen"){
      this.router.navigate(["/empl"]);
    }else{
      console.log("Invalid User");
      this.user = '';
      this.router.navigate(["/login"]);
      
    }
    
  
  }
}
