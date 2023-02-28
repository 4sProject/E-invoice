import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { PrepaireSystemComponent } from './prepaire-system/prepaire-system.component';

@NgModule({
  declarations: [
    PrepaireSystemComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
