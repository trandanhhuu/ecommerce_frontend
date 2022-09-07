import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import { RegisterComponent } from './components/register/register.component';
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckOutComponent,
    LoginComponent,
    LoginStatusComponent,
    ProductCategoryMenuComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SearchComponent,
    RegisterComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
