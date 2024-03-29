import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'inline-form',
    templateUrl: "./inline-form.component.html"
})
export class InlineFormComponent{
    @Input() title: string = '';
    @Input() defaultText: string = "Not defined";
    @Input() hasButton: boolean = false;
    @Input() buttonText: string = "submit";
    @Input() inputPlaceholder: string = "";
    @Input() inputType: string = "input";

    @Output() handleSubmit = new EventEmitter<string>();

    isEditing: boolean = false;

    form = this.fb.group({
        title: [""]
    });

  activeEditing(): void {
    if (this.title) {
      this.form.patchValue({ title: this.title });
    }
    this.isEditing = true;
  }

  onSubmit(): void {
    if (this.form.value.title) {
      this.handleSubmit.emit(this.form.value.title);
    }
    this.isEditing = false;
    this.form.reset();
  }

  constructor(private fb: FormBuilder){}

}