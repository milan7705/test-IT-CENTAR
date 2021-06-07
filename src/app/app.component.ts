import { Component } from '@angular/core';
import {InvoiceServiceService} from './invoice-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InvoiceServiceService]
})
export class AppComponent {
  title = 'main-directory';
}
