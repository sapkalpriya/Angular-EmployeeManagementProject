import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeregisterComponent } from './components/employeeregister/employeeregister.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{HttperrorInterceptor} from './service/httperror.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeregisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
    
    
  ],
  providers: [MatSnackBarModule,EmployeeService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: HttperrorInterceptor,
      multi :true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
