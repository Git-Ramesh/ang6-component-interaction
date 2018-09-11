import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Output()
  greetEvenet = new EventEmitter();
  constructor() {}
  emitEvent() {
    console.log("emitEvent...");
    this.greetEvenet.emit("Child Event Emitted Data...");
  }
  ngOnInit() {}
}
