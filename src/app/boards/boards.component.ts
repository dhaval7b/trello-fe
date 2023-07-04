// import { Component, OnInit } from '@angular/core';
// import { BoardsService } from 'src/app/shared/services/boards.service';

// @Component({
//   selector: 'app-boards',
//   templateUrl: './boards.component.html',
//   styleUrls: ['./boards.component.scss']
// })
// export class BoardsComponent implements OnInit {

//   constructor(private boardsService: BoardsService){}

//   ngOnInit(): void {
//       this.boardsService.getBoards().subscribe((boards)=>{
//         console.log(boards);
//       })
//   }
// }



import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/shared/services/boards.service';
import { BoardsInterface } from 'src/app/shared/types/boards.interface';


@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  boards: BoardsInterface[] = [];
  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.boardsService.getBoards().subscribe((boards) => {
      this.boards = boards;
    });
    
  }

  createBoard(title: string): void {
    console.log("title", title)
    this.boardsService.createBoard(title).subscribe((createdBoard) => {
      this.boards = [...this.boards, createdBoard];
    });
  }
}
