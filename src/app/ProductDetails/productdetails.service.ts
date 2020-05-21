import { Injectable } from '@angular/core';
import { ProductDetails } from './ProductDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

constructor(private http:HttpClient) { }

  productFun():Observable<ProductDetails>{
    return this.http.get<ProductDetails>("https://jsonplaceholder.typicode.com/posts")
  }
}
