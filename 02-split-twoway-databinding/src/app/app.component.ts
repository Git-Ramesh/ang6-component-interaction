import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "split-twoway-databinding";
  username: string;

  getLengthOfUsername(username: string) {
    console.log("Length: " + username.length);
  }
}
