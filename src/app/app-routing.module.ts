import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsPageComponent } from './products/product-details-page/product-details-page.component';
import { ProductListPageComponent } from './products/product-list-page/product-list-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductListPageComponent

  },
  { path: 'products/:productId', component: ProductDetailsPageComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'not-authenticated', component: AccessDeniedComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
