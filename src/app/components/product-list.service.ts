import { Injectable } from '@angular/core';
import { Product } from './interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  url:string="http://localhost:5000/"

  getmenu():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);

    // let items= menu;
    // return items;
  }
  writeMenu(products: Product[]) {
  }
   constructor(private http:HttpClient) {}
}
