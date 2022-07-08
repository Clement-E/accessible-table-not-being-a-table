import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BadgeComponent } from "./badge/badge.component";
import { LienComponent } from "./lien/lien.component";
import { TableauComponent } from "./tableau/tableau.component";

@NgModule({
  declarations: [AppComponent, BadgeComponent, LienComponent, TableauComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
