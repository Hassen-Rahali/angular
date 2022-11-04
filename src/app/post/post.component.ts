import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  product!:Product;
  listPro!:Product[];
  constructor(private productService:ProductServiceService) { }

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
