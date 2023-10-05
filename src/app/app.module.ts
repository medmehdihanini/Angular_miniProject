import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { MyDerectiveDirective } from './my-derective.directive';
import { HomeComponent } from './home/home.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    FooterComponent,
    HeaderComponent,
    ListUserComponentComponent,
    MyDerectiveDirective,
    HomeComponent,
    AddUsersComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,TestcomponentComponent]
})
export class AppModule { }
