import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) {}

  productsUrl:string='api/products'

  getPro(){
    return this.httpClient.get<Product[]>(this.productsUrl)
  }

  postPro(p:Product){
    return this.httpClient.post(this.productsUrl,p);

  }




}
