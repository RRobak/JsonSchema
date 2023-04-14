import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaDisplayerComponent } from './containers/schema-displayer/schema-displayer.component';
import {GridModule, HeaderModule} from "@coreui/angular";



@NgModule({
  declarations: [
    SchemaDisplayerComponent
  ],
  exports: [
    SchemaDisplayerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    GridModule
  ]
})
export class SchemaDisplayerModule { }
