import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './landing-page/header/header.component';
import { DashboardComponent } from './landing-page/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AgentHeaderComponent } from './agent/agent-header/agent-header.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerHeaderComponent } from './customer/customer-header/customer-header.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './landing-page/info/info.component';
import { CarPolicyComponent } from './policies/car-policy/car-policy.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    EmployeeHeaderComponent,
    AdminHeaderComponent,
    AgentDashboardComponent,
    AgentHeaderComponent,
    CustomerDashboardComponent,
    CustomerHeaderComponent,
    InfoComponent,
    CarPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
