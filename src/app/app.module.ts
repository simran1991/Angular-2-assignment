import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app.route';
import {LoginComponent} from './loginPage/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AuthService} from './loginPage/auth.service';
import {LocalStorageService} from "./utils/localstorage.service";
import {DataSharingService} from "./utils/dataSharingService";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
  DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
	  AppRouterModule
  ],
  providers: [AuthService,LocalStorageService,DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
