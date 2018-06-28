import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PeopleComponent} from './people/people.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

import {SecurityService} from "./security/security.service";

import { AppRouting } from './app.routing';
import { LoginComponent } from './security/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PeopleComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
