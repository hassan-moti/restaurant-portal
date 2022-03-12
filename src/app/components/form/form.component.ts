import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from 'stream';
import { Product } from '../interface';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() selectedProduct: Product | undefined;
  @Input() isVisible = false;
  @Input() productList: Product[] = [];

  @Output() newItemEvent = new EventEmitter<boolean>();;
  
  constructor(  
    private productServices:ProductListService,
    private fb: FormBuilder,
    ) { }
  productForm = this.fb.group({
    productName: [''],
    productPrice: [''],
    productImage:['']
  });

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
    let proudctToBeUpdated: any;
    // console.log(this.products);
    for (const prod of this.productList) {
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

    

    const index = this.productList.indexOf(proudctToBeUpdated);
    if (index !== -1) {
        this.productList[index] = updatedProduct;
    }
console.warn(this.productList)
const myJSONString= JSON.stringify(this.productList);
console.log(myJSONString);
// this.fs.writeFile( 'C:/Users/Hassan Motiwala/Desktop/restaurant-portal/src/assets/menu.json', myJSONString)
    
          // write this array in menu.json
    this.isVisible=false;
    this.selectedProduct = undefined;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectedProduct = undefined;
    this.newItemEvent.emit(this.isVisible);
  }

  selectedFile=null;
  onFileSelector(event:any){
this.selectedFile=event.target.files[0];
    console.log(event);

  }
  ngOnInit(): void {
  }

}
