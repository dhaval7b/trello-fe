import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './authGuardService';

const routes : Routes = [{
  path: "register",
  component: RegisterComponent,
},
{
  path: "login",
  component: LoginComponent
}

];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
