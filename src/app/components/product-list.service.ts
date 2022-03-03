import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interface';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  getmenu() {
   
    let items= this.http.get('/assets/menu.json');
    return items; 
  }

  writeMenu(products: Product[]) {
    // replace the full file
  }
   constructor(private http: HttpClient) {}
}