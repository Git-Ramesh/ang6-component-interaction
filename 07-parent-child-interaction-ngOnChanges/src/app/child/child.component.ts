import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  msg: string;
  @Input()
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes.loggedIn;
    if (loggedInValue.currentValue === true) {
      this.msg = "User LoginIN";
    } else {
      this.msg = "Please login";
    }
  }
}
