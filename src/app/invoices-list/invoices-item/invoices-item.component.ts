import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { InvoiceObj } from 'data-invoices';
import { InvoiceServiceService } from 'src/app/invoice-service.service';
// import * as EventEmitter from 'events';
import {Invoices} from '../../invoices.model';


@Component({
  selector: 'app-invoices-item',
  templateUrl: './invoices-item.component.html',
  styleUrls: ['./invoices-item.component.scss']
})
export class InvoicesItemComponent implements OnInit {
  invoicesAll;
  invoice;
  status;
  item;
  filterFlag:boolean = true;


  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
    this.invoicesAll = this.invoiceService.getInvoices();
  }

  getStatusStyle(item: string) {
    if (item === 'paid') {
      return 'rounded-pill bg-success';
    } else if (item === 'pending') {
      return 'rounded-pill bg-warning';
    } else {
      return 'rounded-pill bg-dark'
  }
}
}
