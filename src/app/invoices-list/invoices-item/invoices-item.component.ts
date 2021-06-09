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
  // @Input() invoiceIt!: Invoices ;
  invoiceIt : any;


  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
  }

  // onSelectedItem() {
  //   // THIS IS EMITT TO CHECK ITEM INVOICE
  //   this.invoiceService.invoiceEmmiter.emit(this.invoiceIt!);
  // }

}
