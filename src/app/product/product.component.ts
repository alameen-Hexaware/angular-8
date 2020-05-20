import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  proValue:Product[];
  constructor(private prodService:ProductService) { }

  ngOnInit(): void {
   this.proValue = this.prodService.productFun();
  }

}
