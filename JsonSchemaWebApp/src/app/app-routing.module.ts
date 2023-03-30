import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  SchemaGeneratorContainerComponent
} from "./modules/schema-generator-module/containers/schema-generator-container/schema-generator-container.component";

const routes: Routes = [
  {path:'', component:SchemaGeneratorContainerComponent},
  {path:'schema-generator', component:SchemaGeneratorContainerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
