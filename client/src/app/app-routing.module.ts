import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthLayoutsComponent } from './shared/layouts/auth-layouts/auth-layouts.component';
import { SiteLayoutsComponent } from './shared/layouts/site-layouts/site-layouts.component';
import { AuthGuard } from './shared/classes/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutsComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent }
    ]
  },
  {
      path: '',
      component: SiteLayoutsComponent,
      canActivate: [AuthGuard],
      children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
