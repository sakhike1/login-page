import { AuthenticationService } from './service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-page-demo';

  constructor(public authenticationService: AuthenticationService) {}
}
