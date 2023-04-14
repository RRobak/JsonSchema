import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaGeneratorModuleRoutingModule } from './schema-generator-module-routing.module';
import { SchemaGeneratorContainerComponent } from './containers/schema-generator-container/schema-generator-container.component';
import {ButtonModule, GridModule, ModalModule, NavModule, SidebarModule, TabsModule} from "@coreui/angular";
import {SchemaDisplayerModule} from "../schema-displayer/schema-displayer.module";


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
    ModalModule,
    SchemaDisplayerModule
  ],
  exports: [
    SchemaGeneratorContainerComponent
  ]
})
export class SchemaGeneratorModuleModule { }
