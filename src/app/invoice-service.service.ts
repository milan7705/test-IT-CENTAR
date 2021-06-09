import { Injectable, EventEmitter } from '@angular/core';
import { InvoiceObj } from 'data-invoices';
import { Invoices } from './invoices.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService extends InvoiceObj {

  invoiceEmmiter = new EventEmitter<Invoices>(); // emitter for simplify all changes on project


  // ]
  constructor() {
    super();
    this.load()
  }

  getInvoices() { //Copy of Invoices[] arr
    // return this.invoices.slice();

    let invoiceEl = JSON.parse(localStorage.getItem('invoices')!);
    return invoiceEl;
}
}
