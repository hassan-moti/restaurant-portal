// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Product } from '../interface';
// import { ProductListService } from '../product-list.service';
// import { ProductListComponent } from '../MainMenu/product-list/product-list.component';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   selectedProduct=this.productList.selectedProduct;
//   isVisible=this.productList.isVisible;
//   constructor(  
//     private productServices:ProductListService,
//     private fb: FormBuilder,
//     private productList:ProductListComponent
//     ) { }
//   productForm = this.fb.group({
//     productName: [''],
//     productPrice: [''],
//     productImage:['']
//   });
//   handleSumbit(): void {
//     console.log(this.selectedProduct);
//     // 
//     // let proudctToBeUpdated = this.products.find((product: Product) => product.product_name === this.selectedProduct?.product_name);
//     let proudctToBeUpdated;
//     // console.log(this.products);
//     for (const prod of this.productList.products) {
//       if (prod.product_name === this.selectedProduct?.product_name) {
//         console.log(prod);
//         proudctToBeUpdated = prod;
//         break;
//       }
//     }
//     console.log(proudctToBeUpdated);
//     const updatedProduct: Product = {
//       product_name: this.productForm.get('productName')?.value,
//       price: this.productForm.get('productPrice')?.value,
//       image_title:proudctToBeUpdated.image_title
//     }

    

//     const index = this.productList.products.indexOf(proudctToBeUpdated);
//     if (index !== -1) {
//         this.productList.products[index] = updatedProduct;
//     }
// console.warn(this.productList.products)
// const myJSONString= JSON.stringify(this.productList.products);
// console.log(myJSONString);
// // this.fs.writeFile( 'C:/Users/Hassan Motiwala/Desktop/restaurant-portal/src/assets/menu.json', myJSONString)
    
//           // write this array in menu.json
//     this.isVisible=false;
//     this.selectedProduct = undefined;
//   }

//   handleCancel(): void {
//     this.isVisible = false;
//     this.selectedProduct = undefined;
//   }
//   selectedFile=null;
//   onFileSelector(event:any){
// this.selectedFile=event.target.files[0];
//     console.log(event);

//   }
//   ngOnInit(): void {
//   }

// }
