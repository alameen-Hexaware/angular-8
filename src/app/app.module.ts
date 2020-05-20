import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ProductComponent } from './product/product.component';

const route: Routes = [
  { path: "", redirectTo: "product" , pathMatch:"full" },
  { path: "login", component: LoginComponent },
  { path: "empl", component: EmployeeComponent },
  { path: "empl/:uname", component: EmployeeComponent },
  { path: "viewemp/:ename/:eid", component: ViewemployeeComponent },  
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductComponent }, 
  { path: "**", component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HomeComponent,
    PagenotfoundComponent,
    ViewemployeeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
