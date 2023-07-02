import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { CurrentUserInterface } from './current-user.interface';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterRequest } from './types/registerRequest.interface';
import { LoginRequest } from './types/loginRequest.interface';

@Injectable()
export class AuthService {
  
  currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(undefined);

  isLogged$ = this.currentUser$.pipe(
    filter(currentUser=> currentUser!== undefined), 
    map(currentUser =>  Boolean(currentUser))
    );

  register(registerRequest: RegisterRequest): Observable<CurrentUserInterface>{
    const url: string = `${environment.apiUrl}/users`;
    return this.http.post<CurrentUserInterface>(url, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<CurrentUserInterface>{
    const url: string = `${environment.apiUrl}/users/login`;
    return this.http.post<CurrentUserInterface>(url, loginRequest);
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.currentUser$.next(null);
  }

  setToken(currentUser: CurrentUserInterface): void{
    localStorage.setItem('token', currentUser.token);
  }
  
  getCurrentUser(): Observable<CurrentUserInterface>{
    const url: string = `${environment.apiUrl}/user`;
    return this.http.get<CurrentUserInterface>(url);
  }

  setCurrentUser(currnetUser: CurrentUserInterface | null): void{
    this.currentUser$.next(currnetUser);
  }
  constructor(private http: HttpClient) { }
}
