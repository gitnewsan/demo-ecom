import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html"
})
export class ChildComponent {
  @Input() message: string = "";
  @Output() msg_event = new EventEmitter<string>();

  sendMessage() {
    let msg: string = "konichiwa";
    this.msg_event.emit(msg);
  }
}
