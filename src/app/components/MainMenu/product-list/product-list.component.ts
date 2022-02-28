import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  constructor(private productServices:ProductListService ) { }
  // getProduct(): void {
     products:any=[];
     
    // product=this.productServices.sailor;
    // return product
  // }

  ngOnInit(): void {
    // let product:any;
    
    this.products=this.productServices.items;
// this.getProduct();
  }

}
