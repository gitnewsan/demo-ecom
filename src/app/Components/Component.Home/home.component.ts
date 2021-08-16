import { Component, OnInit } from "@angular/core";

@Component({
  selector: "compo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  name: string = "World";
  message: string = "Hello ";

  ngOnInit() {}

  onEnter(name: string) {
    this.name = name;
  }
}
