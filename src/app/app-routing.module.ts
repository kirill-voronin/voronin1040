import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'purchases',
    loadChildren: () => 
    import('./purchases/purchases.module').then(m => m.PurchasesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
