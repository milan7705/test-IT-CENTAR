import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import {Invoices} from '../invoices.model';
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoices[] = []
  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoices();
  }


}
