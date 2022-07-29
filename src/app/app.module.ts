import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { en_US } from 'ng-zorro-antd/i18n';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/MainMenu/product-list/product-list.component';
import { ProductListService } from './components/product-list.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';

registerLocaleData(en);

@NgModule({
  declarations:[
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule
  ],
  providers: [ProductListService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }