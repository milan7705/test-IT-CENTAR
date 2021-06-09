import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceServiceService } from '../invoice-service.service';
import {Invoices} from '../invoices.model';
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoiceIt : any;
  createValidationInvoices!: FormGroup;
  // invoices: Invoices[] = []
  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
    // this.invoices = this.invoiceService.getInvoices();
    this.invoiceIt = this.invoiceService.getInvoices();



  this.createValidationInvoices = new FormGroup({
    'streetAddressFrom': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'cityFrom': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'postCodeFrom': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'countryFrom': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'clientName': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'clientEmail': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'streetAddressTo': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'cityTo': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'postCodeTo': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'countryTo': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'invoiceDate': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'paymentTerms': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    'description': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
  })

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createValidationInvoices!.value);
  }


}
