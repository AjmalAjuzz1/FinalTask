import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ListEmpComponent } from './admin-department/list-employee/list-employee.component';
import { RegisterEmpComponent} from './Register/Register.component';

const routes: Routes = [
    {path:'', component : LoginComponent},
    {path:'profile',component : ProfileComponent},
    {path:'admin',component : AdminDepartmentComponent},
    {path:'employee',component : EmployeeDepartmentComponent},
    {path:'app-list-emp',component : ListEmpComponent},
    {path:'register',component:  RegisterEmpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
