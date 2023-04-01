import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./core/layout/layout.component";
import {
  ButtonModule,
  DropdownModule, FooterModule,
  GridModule,
  HeaderModule,
  NavbarModule,
  NavModule,
  SidebarModule
} from "@coreui/angular";
import {CoreModule} from "./core/core.module";
import {SchemaGeneratorModuleModule} from "./modules/schema-generator-module/schema-generator-module.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SchemaDisplayerModule} from "./modules/schema-displayer/schema-displayer.module";

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
    GridModule,
    SidebarModule,
    ButtonModule,

    CoreModule,
    SchemaGeneratorModuleModule,
    BrowserAnimationsModule,
    SchemaDisplayerModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LayoutComponent
  ]
})
export class AppModule {
}
