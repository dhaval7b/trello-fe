import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../types/registerRequest.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string | null = null; 
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService){

  }

  onSubmit(): void{
    this.authService.register(this.form.value as RegisterRequest).subscribe({
      next: (currentUser) => {
        console.log('current user', currentUser);
        this.authService.setToken(currentUser);
        this.authService.setCurrentUser(currentUser);
      },
      error: (err: HttpErrorResponse) => {
        console.log('err', err.error);
        this.error = err.error.join(', ');
      }
    })
  }

}
