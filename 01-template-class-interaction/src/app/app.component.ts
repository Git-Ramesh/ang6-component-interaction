import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Component Interaction";
  image_url =
    "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  image_width = 200;
  image_height = 50;
  count: number = 0;
  name: string;

  public incrementCount() {
    this.count += 1;
  }
}
