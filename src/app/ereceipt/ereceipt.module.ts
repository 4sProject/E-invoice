import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EReceiptRoutingModule } from './ereceipt-routing.module';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ReturnReceiptsComponent } from './return-receipts/return-receipts.component';


@NgModule({
  declarations: [
    ReceiptsComponent,
    ReturnReceiptsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    EReceiptRoutingModule
  ]
})
export class EReceiptModule { }
