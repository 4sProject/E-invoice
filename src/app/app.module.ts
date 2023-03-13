import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { Interceptor } from './general/interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BillingModule } from './billing/billing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsModule } from './settings/settings.module';
import { EReceiptModule } from './ereceipt/ereceipt.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    BillingModule,
    EReceiptModule,
    SettingsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
