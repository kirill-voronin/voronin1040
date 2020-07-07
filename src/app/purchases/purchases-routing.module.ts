import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPurchasesComponent } from './list-purchases/list-purchases.component';
import { EditPurchasesComponent } from './edit-purchases/edit-purchases.component';


const routes: Routes = [
  {
    path:'',
    component:ListPurchasesComponent
  },
  {
    path:'edit',
    component:EditPurchasesComponent
  },
  {
    path:'edit/:id',
    component:EditPurchasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
