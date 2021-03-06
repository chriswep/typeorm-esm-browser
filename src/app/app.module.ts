import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TypeormService } from "./typeorm.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [TypeormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
