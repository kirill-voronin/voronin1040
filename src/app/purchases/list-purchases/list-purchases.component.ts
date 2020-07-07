import { Component, OnInit } from '@angular/core';
import { PurchasesModule } from '../purchases.module';
import { PurchasesService } from 'src/app/shared/services/purchases.service';
import { MyPurchases } from 'src/app/shared/models/purchases.model';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import {Tablesort}   from 'src/app/shared/models//tablesort';

@Component({
  selector: 'app-list-purchases',
  templateUrl: './list-purchases.component.html',
  styleUrls: ['./list-purchases.component.css']
})
export class ListPurchasesComponent implements OnInit {

  purchases: MyPurchases[]

  constructor(
    private purchasesServices:PurchasesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    new Tablesort(document.getElementById('table-id'), {
      descending: true
    });
    
    this.getData();
    
  }

  async getData(){
    try {
      let purchases = this.purchasesServices.getAll();
      this.purchases = isNullOrUndefined(await purchases) ? [] : await purchases;
      this.purchases.sort((a,b) => this.getStatus(a.status) > this.getStatus(b.status) ? 1 : -1)
    } catch (error) {
      console.error(error)
    }
    
  }

  onAddPurchases(){
    this.router.navigate([this.router.url, 'edit'])
  }

  onEditPurchases(id: number){
    this.router.navigate([this.router.url, 'edit', id])
  }

  async onChangeStatus(purchase:MyPurchases){
    purchase.status = purchase.status ? false : true
    await this.purchasesServices.putOne(purchase.id,purchase)
    this.getData()
  }

  getStatus(status:boolean){
    return status ? 1 : 0
  }
}
