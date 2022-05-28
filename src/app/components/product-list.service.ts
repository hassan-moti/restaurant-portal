import { Injectable } from '@angular/core';
import { Product } from './interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  url:string="http://localhost:5000/"
  // url:string="https://jsonplaceholder.typicode.com/users";

  getmenu():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);

    // let items= menu;
    // return items;
  }
  updateMenu(product:any,editData:any) {
    return this.http.put(`${this.url}update/${product}`,editData);

  }
  deleteMenu(product:string){
    return this.http.delete(`${this.url}delete/${product}`);
  }
  addMenu(updateProduct:Product){
    return this.http.post(this.url,updateProduct);
  }
   constructor(private http:HttpClient) {}
}
