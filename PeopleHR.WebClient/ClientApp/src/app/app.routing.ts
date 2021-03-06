import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PeopleComponent } from "./people/people.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './security/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const AppRoutingProviders: any[] = [];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
