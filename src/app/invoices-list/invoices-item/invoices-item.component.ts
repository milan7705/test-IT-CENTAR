import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { InvoiceServiceService } from 'src/app/invoice-service.service';
// import * as EventEmitter from 'events';
import {Invoices} from '../../invoices.model';

@Component({
  selector: 'app-invoices-item',
  templateUrl: './invoices-item.component.html',
  styleUrls: ['./invoices-item.component.scss']
})
export class InvoicesItemComponent implements OnInit {
  @Input() invoiceIt!: Invoices;


  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
  }

  onSelectedItem() {
    this.invoiceService.invoiceEmmiter.emit(this.invoiceIt!);
  }

}
