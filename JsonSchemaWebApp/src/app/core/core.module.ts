import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DropdownModule, FooterModule, GridModule, HeaderModule, NavbarModule, NavModule} from '@coreui/angular';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    GridModule,
    DropdownModule,
    NavbarModule,
    NavModule,
    RouterModule,
    FooterModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
  ]
})
export class CoreModule {
}
