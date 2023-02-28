import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';

@NgModule({
  declarations: [
    InvoicesComponent,
    DebitNotesComponent,
    CreditNotesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
