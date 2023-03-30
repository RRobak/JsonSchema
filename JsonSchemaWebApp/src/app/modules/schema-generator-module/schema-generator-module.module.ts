import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaGeneratorModuleRoutingModule } from './schema-generator-module-routing.module';
import { SchemaGeneratorContainerComponent } from './containers/schema-generator-container/schema-generator-container.component';


@NgModule({
  declarations: [
    SchemaGeneratorContainerComponent
  ],
  imports: [
    CommonModule,
    SchemaGeneratorModuleRoutingModule
  ],
  exports: [
    SchemaGeneratorContainerComponent
  ]
})
export class SchemaGeneratorModuleModule { }
