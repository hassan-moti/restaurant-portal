import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any =[];
  selectedProduct: Product | undefined; 

  isVisible=false;

  constructor(private productServices:ProductListService ) { }
  
  showModal(product: Product): void {
    this.isVisible = true;
    this.selectedProduct = product;
  }

  handleOk(): void {
    this.isVisible = false;
    // Goal: To replace this product with the new selected/updated product
    let proudctToBeUpdated = this.products.find((product: Product) => product.product_name === this.selectedProduct?.product_name);
    // https://stackoverflow.com/questions/5915789/how-to-replace-item-in-array
    // products
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
