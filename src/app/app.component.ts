import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trello-fe';
  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.authService.getCurrentUser().subscribe({
        next: (currentUser)=>{
          this.authService.setCurrentUser(currentUser);
        },
        error: (err) =>{
          this.authService.setCurrentUser(null);
        }
      })

      // this.authService.currentUser$.subscribe((res)=>{
      //   console.log("res", res);
      // })

      // this.authService.isLogged$.subscribe(
      //   (res)=>{
      //     console.log("is loggedin", res);
      //   }
      // )
  }
}
