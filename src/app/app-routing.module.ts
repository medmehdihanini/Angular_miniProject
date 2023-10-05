import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponentComponent} from "./list-user-component/list-user-component.component";
import {HeaderComponent} from "./header/header.component";
import {TestcomponentComponent} from "./testcomponent/testcomponent.component";
import {HomeComponent} from "./home/home.component";
import {AddUsersComponent} from "./add-users/add-users.component";
import {MainInvoiceComponent} from "./main-invoice/main-invoice.component";
import {InvoiceComponent} from "./invoice/invoice.component";

const routes: Routes = [

  {
    path:'',
component:HomeComponent
  },
  {
    path:'test',
    component:TestcomponentComponent

  },
  {
    path:'listeuser',
    component:ListUserComponentComponent,
    children:[{path:'addUser',component:AddUsersComponent,}]
  },
  {
    path: 'invoice-management', component: MainInvoiceComponent
  },
  { path: 'invoice', component: InvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
