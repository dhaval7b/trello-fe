import { Injectable } from "@angular/core";
import { CurrentUserInterface } from "src/app/auth/current-user.interface";
import { Socket, io } from "socket.io-client"
import { environment } from "src/environments/environment";

@Injectable()
export class SocketService{
    socket: Socket | undefined;
    setupSocketConnection(currentUser: CurrentUserInterface):void{
        this.socket = io(environment.socketUrl, {
            auth:{
                token: currentUser.token
            }
        })
    }

    disconnect(){
        if (!this.socket){
            throw new Error("socket connection is not established");
        }
        this.socket.disconnect();
    }
}