import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeModule} from './employee/employee.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoute:Routes=[{
  path:'' ,component:EmployeeListComponent
  }]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,EmployeeModule, BrowserAnimationsModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
