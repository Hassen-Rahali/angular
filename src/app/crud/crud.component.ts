import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/Product";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private productService:ProductServiceService) { }
      product!:Product;
     listPro!:Product[];
  ngOnInit(): void {
    this.product = new Product();
    this.productService.getPro().subscribe(
      (data: Product[]) => this.listPro = data,);

  }

    save(){
    this.productService.postPro(this.product).subscribe(
    () =>this.listPro=[this.product, ...this.listPro]
  )
  }

}





