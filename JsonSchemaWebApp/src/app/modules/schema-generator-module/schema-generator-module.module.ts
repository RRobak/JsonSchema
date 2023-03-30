import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaGeneratorModuleRoutingModule } from './schema-generator-module-routing.module';
import { SchemaGeneratorContainerComponent } from './containers/schema-generator-container/schema-generator-container.component';
import {ButtonModule, GridModule, NavModule, SidebarModule, TabsModule} from "@coreui/angular";


@NgModule({
  declarations: [
    SchemaGeneratorContainerComponent
  ],
  imports: [
    CommonModule,
    SchemaGeneratorModuleRoutingModule,
    GridModule,
    SidebarModule,
    NavModule,
    TabsModule,
    ButtonModule,
  ],
  exports: [
    SchemaGeneratorContainerComponent
  ]
})
export class SchemaGeneratorModuleModule { }
