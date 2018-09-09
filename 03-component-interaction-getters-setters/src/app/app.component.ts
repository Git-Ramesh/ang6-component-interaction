import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private _username: string;

  set username(username: string) {
    console.log("Length: " + username.length);
    this._username = username;
  }
  get username() {
    return this._username;
  }
}
