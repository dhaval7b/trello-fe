import { Injectable } from "@angular/core";
import { BoardsInterface } from "../types/boards.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class BoardsService{

    constructor(private http: HttpClient){}

    getBoards(): Observable<BoardsInterface[]>{
      const url = `${environment.apiUrl}/boards`;
      return this.http.get<BoardsInterface[]>(url);
    }

    getBoardById(boardId:string): Observable<BoardsInterface>{
      const url = `${environment.apiUrl}/boards/${boardId}`;
      const test = this.http.get<BoardsInterface>(url);
      // console.log(test)
      return test;
    }
    createBoard(title: string): Observable<BoardsInterface>{
      const url = environment.apiUrl + "/boards";
      return this.http.post<BoardsInterface>(url, {title});
    }
}