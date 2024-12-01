import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm = new FormGroup({
  username: new FormControl(),
  password: new FormControl()
})

role:any=""
constructor (private route:Router, private loginService:LoginService){}
logIn(){
  this.loginService.logIn(this.loginForm.value).subscribe({
    next:(response)=>{
      this.role = response;
      if(this.role.roleName === 'ADMIN'){
        this.route.navigate(['admin-dashboard']);
      }
      else if(this.role.roleName === "EMPLOYEE"){
        this.route.navigate(['employee-dashboard']);
      }
      else if(this.role.roleName === "AGENT"){
        this.route.navigate(['agent-dashboard']);
      }
      else{
        this.route.navigate(['custom-dashboard']);
      }
    },
    error:(error:HttpErrorResponse)=>{
      console.error(error);
    }
  })
  
}
}
