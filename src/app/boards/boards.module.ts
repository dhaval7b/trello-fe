import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/authGuardService';
import { BoardsService } from '../shared/services/boards.service';
import { InlineFormModule } from '../shared/modules/inline-form/inline-form.module';
import { TopbarModule } from '../shared/modules/topbar/topbar.module';

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
    RouterModule.forChild(routes),
    InlineFormModule,
    TopbarModule
  ],
  providers: [BoardsService]
})
export class BoardsModule { }
