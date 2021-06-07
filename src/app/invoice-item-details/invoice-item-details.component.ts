import { Component, Input, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { Invoices } from '../invoices.model';

@Component({
  selector: 'app-invoice-item-details',
  templateUrl: './invoice-item-details.component.html',
  styleUrls: ['./invoice-item-details.component.scss']
})
export class InvoiceItemDetailsComponent implements OnInit {

  constructor(private invoiceService: InvoiceServiceService) { }
  invoices: Invoices[] = []



  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoices()


  }

}
