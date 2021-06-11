import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-invoice-item-details',
  templateUrl: './invoice-item-details.component.html',
  styleUrls: ['./invoice-item-details.component.scss']
})
export class InvoiceItemDetailsComponent implements OnInit, OnDestroy {
  invoice;
  id;
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


  constructor(private invoiceService: InvoiceServiceService, private _Activatedroute:ActivatedRoute, private router:Router) { }
  @ViewChild("myForm") form: any;


  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    let invoices = this.invoiceService.getInvoices();
    this.invoice = invoices.find(p => p.id == this.id);

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
onEditItem() {
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

deleteInvoices(id) {
    this.invoiceService.onDeleteInvoice(id);
    this.router.navigate(['invoice-list']);
  }
  onSubmit() {
    if (this.form.value) {
      let editedInvoice = {
        id: this.id,
        senderAddress: {
          street: this.form.value.streetAddressFrom,
          city: this.form.value.cityFrom,
          postCode: this.form.value.postCodeFrom,
          country: this.form.value.countryFrom,
        },
        clientAddress: {
          streetAddress: this.form.value.streetAddressTo,
          city: this.form.value.cityTo,
          postCode: this.form.value.postCodeTo,
          country: this.form.value.countryTo,
        },
        clientName: this.form.value.clientName,
        clientEmail: this.form.value.clientEmail,
        createdAt: this.form.value.invoiceDate,
        paymentTerms: this.form.value.paymentTerms,
        description: this.form.value.description,
        paymentDue: this.form.value.paymentDue,
        items: this.invoice.items,
        status: this.invoice.status,
        total: this.invoice.total
      }
    this.invoiceService.updateInvoice(this.invoice, editedInvoice);
    this.router.navigate(['invoice-list']);
    }
  }
  ngOnDestroy() {
  }
}
