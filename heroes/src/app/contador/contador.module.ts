import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorcitoComponent } from './contadorcito/contadorcito.component';



@NgModule({
  declarations: [
    ContadorcitoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorcitoComponent
  ]
})
export class ContadorModule { }
