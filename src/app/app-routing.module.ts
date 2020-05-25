import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [
  {
    path : '', redirectTo: '/login',pathMatch:'full'
  },
  { 
    path: 'login',component: LoginComponent
  },
  {
    path: 'dashboard/:id', component: DashboardComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path :'changepassword',component:ChangepasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
