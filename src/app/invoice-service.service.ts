import { Injectable, EventEmitter } from '@angular/core';
import { Invoices } from './invoices.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  invoiceEmmiter = new EventEmitter<Invoices>();

  private invoices: Invoices[] = [
    new Invoices (4573, 'Obelicev Venac', 'Nis', 18000, 'Srbija', 'Marija','marija@email.com', 'Ivo Lola Ribar', 'Beograd', 11000, 'Srbija', '7. Jun', '14 days','basic description', '$1,002,95'),
    new Invoices (6768, 'Wall Street', 'NY', 56464563, 'USA', 'Josh','josh@email.com', 'Manhatan', 'NY', 355678, 'USA', '25. Jun', '30 days','basic description part2', '$245,55'),
  ]

  getInvoices() { //Copy of Invoices[] arr
    return this.invoices.slice();
  }
  constructor() { }
}
