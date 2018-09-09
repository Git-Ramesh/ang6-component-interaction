import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  _loggedIn: boolean;
  constructor() {}

  @Input()
  set loggedIn(loggedIn: boolean) {
    this._loggedIn = loggedIn;
  }
  get loggedIn() {
    return this._loggedIn;
  }
  ngOnInit() {}
}
