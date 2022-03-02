import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/MainMenu/product-list/product-list.component';
import { ProductListService } from './components/product-list.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgZorroModule} from './components/ngZorro.module';

registerLocaleData(it);

@NgModule({
  declarations:[
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroModule
    
  ],
  providers: [ProductListService, { provide: NZ_I18N, useValue: it_IT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
