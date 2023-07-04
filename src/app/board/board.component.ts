import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from 'src/app/shared/services/boards.service';
import { BoardsInterface } from 'src/app/shared/types/boards.interface';
import { BoardService } from './board.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  board$ : Observable<BoardsInterface>
  boardId: string;
  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    private boardService: BoardService  ){
    const boardId = this.route.snapshot.paramMap.get("boardId");
    if (!boardId){
      throw new Error("Can't get boardId from url");
    }
    this.boardId = boardId;
    this.board$ = this.boardService.board$.pipe(filter(Boolean));
  }

  ngOnInit(): void{
    this.fetchData();
  }

  fetchData(): void{
    this.boardsService.getBoardById(this.boardId).subscribe(board=>{
      console.log(board)
      this.boardService.setBoard(board);
    })
  }
}
