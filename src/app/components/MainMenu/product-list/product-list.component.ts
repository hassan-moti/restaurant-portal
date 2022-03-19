import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../interface';
import { ProductListService } from '../../product-list.service';
import { NzModalService,NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any =[];
  selectedProduct: Product | undefined;
  demo:any; 
  isVisible=false;
  productForm = this.fb.group({
    productName: [''],
    productPrice: [''],
    productImage:['']
  });
  constructor(
    private productServices:ProductListService,
    private fb: FormBuilder,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }
  
  showModal(product?: Product): void {
    this.isVisible = true;
    if (product) {
      this.selectedProduct = product;
      this.productForm.patchValue({
        productName: this.selectedProduct.product_name,
        productPrice: this.selectedProduct.price
      });
    }
  }
  handleSumbit(): void {
    let proudctToBeUpdated;
    for (const prod of this.products) {
      if (prod.product_name === this.selectedProduct?.product_name) {
        proudctToBeUpdated = prod;
        break;
      }
    }
    const updatedProduct: Product = {
      product_name: this.productForm.get('productName')?.value,
      price: this.productForm.get('productPrice')?.value,
      image_title:proudctToBeUpdated.image_title
    }
    const index = this.products.indexOf(proudctToBeUpdated);
    if (index !== -1) {
        this.products[index] = updatedProduct;
    }
    this.isVisible=false;
    this.selectedProduct = undefined;
  }
  handleCancel(): void {
    this.isVisible = false;
    this.selectedProduct = undefined ;
  }
  onModal(){
    this.selectedProduct=undefined;
    this.productForm.patchValue({
      productName: null,
      productPrice: null
    });
    this.isVisible=true;
 
  }
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Item?',
      nzContent: '<b style="color: red;">some description</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  ngOnInit(): void {
  this.products = this.productServices.getmenu();
  }
}
