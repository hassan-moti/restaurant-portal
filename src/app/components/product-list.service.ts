import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  getmenu() {
   
    let items= this.http.get('/assets/menu.json');
    return items; 
  }
   constructor(private http: HttpClient) {}
}