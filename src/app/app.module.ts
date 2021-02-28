import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ThrottleClickDirective } from "./throttle-click.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ThrottleClickDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
