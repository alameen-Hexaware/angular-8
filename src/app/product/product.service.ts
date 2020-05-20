import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productFun(): Product[] {
    return [
      { prodId: 11, prodName: "Pen", prodDesc: "Marker" },
      { prodId: 12, prodName: "Soap", prodDesc: "HandWash" },
      { prodId: 13, prodName: "Bag", prodDesc: "School Bag" },
    ]
  }
}
