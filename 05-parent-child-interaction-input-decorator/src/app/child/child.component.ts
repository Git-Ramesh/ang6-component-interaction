import { Component, OnInit, Input } from "@angular/core";
import { flatten } from "@angular/core/src/render3/util";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input()
  loggedIn: boolean = false;
  constructor() {}

  ngOnInit() {}
}
