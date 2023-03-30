import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./core/layout/layout.component";
import {DropdownModule, GridModule, HeaderModule, NavbarModule, NavModule} from "@coreui/angular";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    GridModule,
    DropdownModule,
    NavbarModule,
    NavModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LayoutComponent
  ]
})
export class AppModule {
}
