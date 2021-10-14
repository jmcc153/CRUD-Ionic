import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBiblioPage } from './form-biblio.page';

const routes: Routes = [
  {
    path: '',
    component: FormBiblioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormBiblioPageRoutingModule {}
