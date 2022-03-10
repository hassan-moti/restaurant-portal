import { Injectable } from '@angular/core';
import { Product } from './interface';
import menu from 'src/assets/menu.json';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  getmenu() {
   
    let items= menu;
    return items; 
  }

  writeMenu(products: Product[]) {
    // replace the full file
  }
   constructor(private http:HttpClient) {}
}