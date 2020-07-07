import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchasesComponent } from './edit-purchases.component';

describe('EditPurchasesComponent', () => {
  let component: EditPurchasesComponent;
  let fixture: ComponentFixture<EditPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});