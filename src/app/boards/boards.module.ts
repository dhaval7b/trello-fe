import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards/boards.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/authGuardService';
import { BoardsService } from '../shared/services/boards.service';

const routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuardService]
  }
]


@NgModule({
  declarations: [
    BoardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [BoardsService]
})
export class BoardsModule { }
