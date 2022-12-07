import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { ListEmpComponent } from './admin-department/list-employee/list-employee.component';
import { CreateUpdateEmpComponent } from './admin-department/create-update-employee/create-update-employee.component';
import { PublicService } from './services/public.service';
import { RegisterEmpComponent } from './Register/Register.component';
import { LeavesComponent } from './leaves/leaves.component';
// import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AdminDepartmentComponent,
    EmployeeDepartmentComponent,
    ListEmpComponent,
    CreateUpdateEmpComponent,
   RegisterEmpComponent,
   LeavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
