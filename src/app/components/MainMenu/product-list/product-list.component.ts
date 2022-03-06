import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../interface';
import { ProductListService } from '../../product-list.service';
import * as fs from 'fs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   fs = require('fs');
  products: any =[];
  selectedProduct: Product | undefined; 

  isVisible=false;
  
  productForm = this.fb.group({
    productName: [''],
    productPrice: [''],
  });

  constructor(
    private productServices:ProductListService,
    private fb: FormBuilder  
  ) { }
  
  showModal(product: Product): void {
    this.isVisible = true;
    this.selectedProduct = product;

    this.productForm.patchValue({
      productName: this.selectedProduct.product_name,
      productPrice: this.selectedProduct.price
    });
  }

  handleSumbit(): void {
    console.log(this.selectedProduct);
    // 
    // let proudctToBeUpdated = this.products.find((product: Product) => product.product_name === this.selectedProduct?.product_name);
    let proudctToBeUpdated;
    console.log(this.products);
    for (const prod of this.products) {
      if (prod.product_name === this.selectedProduct?.product_name) {
        console.log(prod);
        proudctToBeUpdated = prod;
        break;
      }
    }
    console.log(proudctToBeUpdated);
    const updatedProduct: Product = {
      product_name: this.productForm.get('productName')?.value,
      price: this.productForm.get('productPrice')?.value,
      image_title: proudctToBeUpdated.image_title
    }
    const index = this.products.indexOf(proudctToBeUpdated);
    if (index !== -1) {
        this.products[index] = updatedProduct;
    }
console.warn(this.products)
const myJSONString= JSON.stringify(this.products);
console.log(myJSONString);
this.fs.writeFile( 'C:/Users/Hassan Motiwala/Desktop/restaurant-portal/src/assets/menu.json', myJSONString)
    
          // write this array in menu.json
    
    this.selectedProduct = undefined;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectedProduct = undefined;
  }

  ngOnInit(): void {

    this.products = this.productServices.getmenu();
  }
}
