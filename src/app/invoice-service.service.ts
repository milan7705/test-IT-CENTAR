import { Injectable, EventEmitter } from '@angular/core';
import { InvoiceObj } from 'data-invoices';
import { Invoices } from './invoices.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService extends InvoiceObj {

  constructor() {
    super();
    this.load()
  }

  getInvoices() {
    let invoiceEl = JSON.parse(localStorage.getItem('invoices')!);
    return invoiceEl;
}

onDeleteInvoice(id) {
  let invoiceEl = JSON.parse(localStorage.getItem('invoices')!);
  for(let index = 0; index<invoiceEl.length; index++) {
    if(invoiceEl[index].id == id) {
      invoiceEl.splice(index, 1)
    }
  }
  localStorage.setItem('invoices', JSON.stringify(invoiceEl))
}


addInvoices(items) {
  localStorage.setItem('invoices', JSON.stringify(items));
}
updateInvoice(oldInv, newInv){
  let el = JSON.parse(localStorage.getItem('invoices')!);

for(let i = 0; i <el.length; i++) {
 if(el[i].id == oldInv.id) {
   el[i] = newInv;
 }
}
 localStorage.setItem('invoices', JSON.stringify(el));
}
}
