import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/MainMenu/product-list/product-list.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path:'sales',
    component:SalesComponent
  },
  {
    path:'',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }