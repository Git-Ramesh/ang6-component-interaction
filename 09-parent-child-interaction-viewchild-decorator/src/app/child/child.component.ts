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
export class ChildComponent implements OnInit {
  devName = "Ramesh";
  ngOnInit() {}

  changeDevName(devName: string) {
    this.devName = devName;
  }
}
