import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopbarComponent } from "./topbar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations:[TopbarComponent],
    providers:[],
    exports:[TopbarComponent]
})
export class TopbarModule{

}