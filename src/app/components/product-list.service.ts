import { Injectable } from '@angular/core';
import fooodList from 'src/app/components/foodList.json' ;

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
public items:any[]=fooodList;



   constructor() {
    
  }
   
}
