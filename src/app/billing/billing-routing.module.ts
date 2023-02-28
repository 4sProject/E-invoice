import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { DebitNotesComponent } from './debit-notes/debit-notes.component';
import { ApplayoutComponent } from '../shared/applayout/applayout.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';

const routes: Routes = [
  { path: '', 
    component: ApplayoutComponent,
    children: [
      { path: '', component: InvoicesComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'debit-notes', component: DebitNotesComponent },
      { path: 'credit-notes', component: CreditNotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
