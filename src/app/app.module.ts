import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListPageComponent } from './products/product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LoginComponent } from './login/login.component';

import { CustomerListReducer } from './login/store/customer-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListPageComponent,
    ProductDetailsPageComponent,
    CustomerComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ customerList: CustomerListReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
