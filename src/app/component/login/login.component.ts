import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupData = {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    confirmPassword: ''
  };

  loginData = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    // Implement your signup logic here
    console.log('Signup Data:', this.signupData);
  }

  logIn() {
    // Implement your login logic here
    console.log('Login Data:', this.loginData);
  }

}
