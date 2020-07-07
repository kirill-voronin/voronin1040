import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MyPurchases } from 'src/app/shared/models/purchases.model';
import { PurchasesService } from 'src/app/shared/services/purchases.service';

@Component({
  selector: 'app-edit-purchases',
  templateUrl: './edit-purchases.component.html',
  styleUrls: ['./edit-purchases.component.css']
})
export class EditPurchasesComponent implements OnInit {
  purchasesForm:FormGroup
  id:number
  purchase:MyPurchases
  purchases:MyPurchases[]
  constructor(
    private activatedRouter:ActivatedRoute,
    private purchesesService:PurchasesService,
    private router:Router
  ) { 
    this.activatedRouter.params.subscribe(params => {
      if(!isNullOrUndefined(params.id)){
        this.id = +params.id;
        
      }else{
        this.id = null;
        
      }})
  }

  ngOnInit(): void {
    this.getData();
    this.purchasesForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      status: new FormControl({value:false, disabled:false})
    })
  }

  async getData(){
    if (!isNullOrUndefined(this.id)){
      try {
        let purchese = this.purchesesService.getOneById(this.id)
        this.purchase = await purchese
        
      } catch (error) {
        console.error(error)
      }
    } else{
      try {
        let purcheses = this.purchesesService.getAll()
        this.purchases = await purcheses
      } catch (error) {
        console.error(error)
      }
    }
    if (this.id != null){
      this.purchasesForm.patchValue({
        id: this.purchase.id,
        name: this.purchase.name,
        count: this.purchase.count,
        status: this.purchase.status
      })
    }
  }

  async onEditPurchase(){
    if (!isNullOrUndefined(this.id)){
      try {
        await this.purchesesService.putOne(this.id,this.purchasesForm.value)
      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        let id = this.purchasesForm.value.id
        let purchases = this.purchases.find(purchase => purchase.id == id)
        if(isNullOrUndefined(purchases)){
          let res = await this.purchesesService.postOne(this.purchasesForm.value)
          this.router.navigate([this.router.url, res.id])
        } else{
          alert("Покупка с таким id уже существует")
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  onTable(){
    this.router.navigate(["/purchases"])
  }

  async onDelete(id:number){
    await this.purchesesService.deleteOneById(id)
    this.router.navigate(["/purchases"])
  }

}
