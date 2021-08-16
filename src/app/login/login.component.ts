import { AuthenticationService } from './../service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signinData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    const signInData = new SignInData(
      signInForm.value.email,
      signInForm.value.password
    );
    this.authenticationService.authenticate(signInData);
  }
}
