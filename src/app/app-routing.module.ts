import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './landing-page/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { InfoComponent } from './landing-page/info/info.component';
import { CarPolicyComponent } from './policies/car-policy/car-policy.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
    children: [
      {
      path: 'info',
      component: InfoComponent
    },
  {
    path: 'car-policy',
    component: CarPolicyComponent
  }
]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'employee-dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'agent-dashboard',
    component:AgentDashboardComponent
  },
  {
    path:'customer-dashboard',
    component:CustomerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
