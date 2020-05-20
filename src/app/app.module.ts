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

const route: Routes = [
  { path: "", redirectTo: "home" , pathMatch:"full" },
  { path: "login", component: LoginComponent },
  { path: "empl", component: EmployeeComponent },
  { path: "empl/:uname", component: EmployeeComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HomeComponent,
    PagenotfoundComponent
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
