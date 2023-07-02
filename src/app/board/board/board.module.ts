import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/authGuardService';

const routes: Routes = [
  {
    path: "boards/:boardId",
    component: BoardComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BoardModule { }
