import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/shared/services/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  constructor(private boardsService: BoardsService){}

  ngOnInit(): void {
      this.boardsService.getBoards().subscribe((boards)=>{
        console.log(boards);
      })
  }
}
