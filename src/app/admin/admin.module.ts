import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }