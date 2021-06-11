import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoiceEl;
  streetAddressFrom;
  cityFrom;
  postCodeFrom;
  countryFrom;
  clientName;
  clientEmail;
  streetAddressTo;
  cityTo;
  postCodeTo;
  countryTo;
  invoiceDate;
  paymentTerms;
  description;
  items:Array<any> = [];


  constructor(private invoiceService: InvoiceServiceService, private router:Router) { }
  @ViewChild("myForm") form: any;

  ngOnInit() {
    this.invoiceEl = this.invoiceService.getInvoices();
    console.log(this.invoiceEl)
    this.items.push({
      name: '',
      price: '',
      quantity: '',
      total: ''
    })
  }

  onCreateNewItem() {
    this.items.push({
      name: 'Test',
      price: '513',
      quantity: '2',
      total: '1026'
    })
  }

onDeleteItem(eventItemId) {
  console.log(this.items)
 let tempArr:any = [];
 this.items.forEach((el, i) => {
   if (eventItemId !== i) tempArr.push(el)
 })
 this.items = [...tempArr]
 console.log(this.items)
}
onSubmit(origin) {
  let original;
  if (origin.SubmitEvent) original = origin.submitter.value
  else original = origin.currentTarget.value
  let status = 'pending'
  if(original === 'Save as Draft') status = 'draft'
  if (this.form.value) {
    let newInvoice = {
      id:uuid().slice(0, 6).toUpperCase(),
      senderAddress: {
        street: this.form.value.streetAddressFrom,
        city: this.form.value.cityFrom,
        postCode: this.form.value.postCodeFrom,
        country: this.form.value.countryFrom,
      },
      clientAddress: {
        street: this.form.value.streetAddressTo,
        city: this.form.value.cityTo,
        postCode: this.form.value.postCodeTo,
        country: this.form.value.countryTo,
      },
      clientName: this.form.value.clientName,
      clientEmail: this.form.value.clientEmail,
      createdAt: this.form.value.invoiceDate,
      paymentTerms: this.form.value.paymentTerms,
      description: this.form.value.description,
      paymentDue: "2021-02-02",
      items: this.items,
      status: status,
      total: "8272"
    }
    this.invoiceEl.push(newInvoice);
    this.invoiceService.addInvoices(this.invoiceEl);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['invoice-list']);
    });
    }
}

}
