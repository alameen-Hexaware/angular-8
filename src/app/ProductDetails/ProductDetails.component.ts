import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from './productdetails.service';
import { ProductDetails } from './ProductDetails';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private product:ProductdetailsService) { }

  prodt:ProductDetails;
  ngOnInit() :void{
    this.product.productFun().subscribe(data=>this.prodt=data)
  }

}
