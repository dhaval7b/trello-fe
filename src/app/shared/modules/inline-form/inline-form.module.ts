import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InlineFormComponent } from "./inline-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations:[InlineFormComponent],
    providers:[],
    exports:[InlineFormComponent]
})
export class InlineFormModule{

}