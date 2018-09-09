import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  private _username: string;

  @ViewChild("usernameRef")
  usernameElementRef: ElementRef;
  set username(username: string) {
    this._username = username;
  }
  get username() {
    return this._username;
  }
  //Enabling auto focus on username text box.
  ngAfterViewInit() {
    this.usernameElementRef.nativeElement.focus();
  }
}
