import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any=[];

  isVisible=false;

  constructor(private productServices:ProductListService ) { }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
     

    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {

    this.products=this.productServices.getmenu();
  }
}
