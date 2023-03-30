import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DropdownModule, GridModule, HeaderModule, NavbarModule, NavModule} from '@coreui/angular';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    GridModule,
    DropdownModule,
    NavbarModule,
    NavModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class CoreModule {
}
