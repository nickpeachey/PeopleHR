import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  constructor(private securityService: SecurityService) {

  }

  login() {
    console.log(this.user);
    this.securityService.login(this.user).subscribe(
      resp => {this.securityObject = resp; }
    );

    console.log(this.securityObject);
  }

  ngOnInit() {
  }

}
