import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any=[];
  selectedProduct: Product | undefined; 

  isVisible=false;

  constructor(private productServices:ProductListService ) { }
  
  showModal(product: Product): void {
    this.isVisible = true;
    this.selectedProduct = product;
  }

  handleOk(): void {
    this.isVisible = false;
    this.selectedProduct = undefined;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectedProduct = undefined;
  }

  ngOnInit(): void {

    this.products=this.productServices.getmenu();
  }
}
