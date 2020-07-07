import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesComponent } from './purchases.component';
import { ListPurchasesComponent } from './list-purchases/list-purchases.component';
import { EditPurchasesComponent } from './edit-purchases/edit-purchases.component';


@NgModule({
  declarations: [PurchasesComponent, ListPurchasesComponent, EditPurchasesComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PurchasesModule { }
