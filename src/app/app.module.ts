import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesItemComponent } from './invoices-list/invoices-item/invoices-item.component';
import { InvoiceItemDetailsComponent } from './invoice-item-details/invoice-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    InvoicesItemComponent,
    InvoiceItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
