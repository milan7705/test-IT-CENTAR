export class Invoices {
  public invoiceId: number;
  public streetAddressFrom: string;
  public cityFrom: string;
  public postCodeFrom: number;
  public countryFrom: string;

  public clientNameTo: string;
  public clientEmailTo: string;
  public streetAddressTo: string;
  public cityTo: string;
  public cityPostCodeTo: number;
  public countryTo: string;
  public invoiceDateTo: string;
  public paymentTerm: string;
  public descriptionTo: string;
  public invoiceAmount: string;


  constructor
  (
    invoiceId: number,
    streetAddressFrom: string,
    cityFrom: string,
    postCodeFrom: number,
    countryFrom: string,
    clientNameTo: string,
    clientEmailTo: string,
    streetAddressTo: string,
    cityTo: string,
    cityPostCodeTo: number,
    countryTo: string,
    invoiceDateTo: string,
    paymentTerm: string,
    descriptionTo: string,
    invoiceAmount: string

  ) {
this.invoiceId = invoiceId;
this.streetAddressFrom = streetAddressFrom;
this.cityFrom = cityFrom;
this.postCodeFrom = postCodeFrom;
this.countryFrom = countryFrom;
this.clientNameTo = clientNameTo;
this.clientEmailTo = clientEmailTo;
this.streetAddressTo = streetAddressTo;
this.cityTo = cityTo;
this.cityPostCodeTo = cityPostCodeTo;
this.countryTo = countryTo;
this.invoiceDateTo = invoiceDateTo;
this.paymentTerm = paymentTerm;
this.descriptionTo = descriptionTo;
this.invoiceAmount = invoiceAmount;
  }
}
