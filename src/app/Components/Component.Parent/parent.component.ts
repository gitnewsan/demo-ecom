import { Component } from "@angular/core";
import { DataService } from "src/app/Services/data.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html"
})
export class ParentComponent {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.message = this.data.getMessage();
  }

  showMessage(msg: string) {
    console.log(msg);
  }
}
