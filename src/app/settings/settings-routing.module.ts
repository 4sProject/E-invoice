import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplayoutComponent } from '../shared/applayout/applayout.component';
import { PrepaireSystemComponent } from './prepaire-system/prepaire-system.component';

const routes: Routes = [
  { path: '', 
    component: ApplayoutComponent,
    children: [
      { path: '', component: PrepaireSystemComponent },
      { path: 'settings', component: PrepaireSystemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
