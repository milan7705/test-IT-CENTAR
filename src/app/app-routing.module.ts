import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { NgModule } from '@angular/core';
import { InvoiceItemDetailsComponent } from './invoice-item-details/invoice-item-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/invoice-list', pathMatch: 'full'},
  {path: 'invoice-list', component: InvoicesListComponent},
  {path: 'invoice-detail/:id', component: InvoiceItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
