import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "user/login", pathMatch: "full" },
  { path: 'login', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: 'billing', loadChildren: () => import('./billing/billing.module').then((m) => m.BillingModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
  { path: 'ereceipt', loadChildren: () => import('./ereceipt/ereceipt.module').then((m) => m.EReceiptModule) }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
