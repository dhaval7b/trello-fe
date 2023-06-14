import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [{
  path: "register",
  component: RegisterComponent,
},
// {
//   path: "login",
//   component: RegisterComponent
// }

];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService]
})
export class AuthModule { }
