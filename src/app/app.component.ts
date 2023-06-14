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
        next: (res)=>{
          console.log("hello");
          console.log(res)
        },
        error: (err) =>{
          console.log("you got this error")
          console.log(err);
          this.authService.setCurrentUser(null);
        }
      })
  }
}
