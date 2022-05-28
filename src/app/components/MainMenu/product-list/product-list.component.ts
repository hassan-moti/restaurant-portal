import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../interface';
import { ProductListService } from '../../product-list.service';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  selectedProduct: Product | undefined;
  demo: any;
  isVisible = false;
  productForm = this.fb.group({
    productName: [''],
    productPrice: [''],
    imageTitle: ['']
  });
  constructor(
    private productServices: ProductListService,
    private fb: FormBuilder,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  showModal(product?: Product): void {
    this.isVisible = true;
    if (product) {
      this.selectedProduct = product;
      this.productForm.patchValue({
        productName: this.selectedProduct.productName,
        productPrice: this.selectedProduct.price,
        imageTitle:this.selectedProduct.imageTitle
      });

    }
  }
  handleSumbit(selectedProduct:any): void {
    let proudctToBeUpdated;
    for (const prod of this.products) {
      if (prod.productName === this.selectedProduct?.productName) {
        proudctToBeUpdated = prod;
        break;
      }
    }
    const updatedProduct: Product = {
      productName: this.productForm.get('productName')?.value,
      price: this.productForm.get('productPrice')?.value,
      imageTitle: this.productForm.get('imageTitle')?.value
      // imageTitle: proudctToBeUpdated.imageTitle
    }
    const index = this.products.indexOf(proudctToBeUpdated);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }

    if (selectedProduct===undefined){
          this.productServices.addMenu(updatedProduct).subscribe((result)=>
    console.warn(" added mubarak ho"));
    }

    else{
    this.productServices.updateMenu(proudctToBeUpdated.productName,updatedProduct).
    subscribe((result)=>console.log(result,"data updated mubarak ho "));

    this.productServices.getmenu().subscribe(data => this.products = data);
    }
    this.isVisible = false;
    this.selectedProduct = undefined;




  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectedProduct = undefined;
  }
  onModal() {
    this.selectedProduct = undefined;
    this.productForm.patchValue({
      productName: null,
      productPrice: null,
      imageTitle:null
    });
    this.isVisible = true;
  }
  //   this.productServices.addMenu(updatedProduct).subscribe((result)=>
  //   console.warn(result," added mubarak ho"));
  showDeleteConfirm(product:string): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Item?',
      nzContent: '<b style="color: red;">some description</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
      this.productServices.deleteMenu(product).subscribe();
      this.productServices.getmenu().subscribe(data => this.products = data);
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  ngOnInit(): void {
    this.productServices.getmenu().subscribe(data => this.products = data);
    console.log(this.products);
  }
}
