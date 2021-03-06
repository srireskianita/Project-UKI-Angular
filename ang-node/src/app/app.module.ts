import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
    data: { title: 'Employee List' }
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    data: { title: 'Employee Add' }
  },
  {
    path: 'employees/:id',
    component: EmployeeEditComponent,
    data: { title: 'Employee Edit' }
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
