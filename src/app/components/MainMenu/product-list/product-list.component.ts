import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../product-list.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any=[];

  constructor(private productServices:ProductListService ) { }


  ngOnInit(): void {
    
    this.products=this.productServices.getmenu();
    console.log(this.products);
  }

}
