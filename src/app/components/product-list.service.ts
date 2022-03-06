import { Injectable } from '@angular/core';
import { Product } from './interface';
import menu from 'src/assets/menu.json';


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
   constructor() {}
}