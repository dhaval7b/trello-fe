import { Injectable } from "@angular/core";
import { BoardsInterface } from "../types/boards.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class BoardsService{
    // createBoard(title: string) {
    //   throw new Error('Method not implemented.');
    // }
    constructor(private http: HttpClient){}

    getBoards(): Observable<BoardsInterface[]>{
      const url = `${environment.apiUrl}/boards`;
      return this.http.get<BoardsInterface[]>(url);
    }

    getBoardById(boardId:string): Observable<BoardsInterface>{
      const url = `${environment.apiUrl}/board/${boardId}`;
      return this.http.get<BoardsInterface>(url);
    }
    createBoard(title: string): Observable<BoardsInterface>{
      const url = environment.apiUrl + "/boards";
      return this.http.post<BoardsInterface>(url, {title});
    }
}