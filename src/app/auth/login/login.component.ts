import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../types/registerRequest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../types/loginRequest.interface';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage: string | null = null; 
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router){

  }

  onSubmit(): void{
    this.authService.login(this.form.value as LoginRequest).subscribe({
      next: (currentUser) => {
        console.log('current user', currentUser);
        this.authService.setToken(currentUser);
        this.authService.setCurrentUser(currentUser);
        this.errorMessage = null;
        this.router.navigateByUrl("/");
      },
      error: (err: HttpErrorResponse) => {
        // console.log('err', err.error);
        this.errorMessage = err.error.emailOrPassword;
      }
    })
  }

}
