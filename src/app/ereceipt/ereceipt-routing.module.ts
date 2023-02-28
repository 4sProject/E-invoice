import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ApplayoutComponent } from '../shared/applayout/applayout.component';
import { ReturnReceiptsComponent } from './return-receipts/return-receipts.component';

const routes: Routes = [
  { path: '', 
    component: ApplayoutComponent,
    children: [
      { path: '', component: ReceiptsComponent },
      { path: 'receipts', component: ReceiptsComponent },
      { path: 'return-receipts', component: ReturnReceiptsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EReceiptRoutingModule { }
