import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormBiblioPageRoutingModule } from './form-biblio-routing.module';

import { FormBiblioPage } from './form-biblio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormBiblioPageRoutingModule
  ],
  declarations: [FormBiblioPage]
})
export class FormBiblioPageModule {}
