import { Component, Input } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class Star {
  @Input() count: number = 0;
}
