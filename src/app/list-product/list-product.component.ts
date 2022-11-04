import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {CalculService} from "../service/calcul.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
contenu= "----------------------------------------------------------------------------------------";

  ProductList!: Product[] ;
  prix!:number;
  constructor(private calculService:CalculService ) { }
  c!:number;
  calcul() {
    this.c = this.calculService.getNumberOf
    (this.ProductList,"like",5)
  }


  ngOnInit(): void {
    this.ProductList =
      [ {id : 1 , title : "HASSEN" ,price : 100 , quantity : 100 , like : 0  } ,
        {id : 6 , title : "RAHALI" ,price : 100 , quantity : 5, like : 0  },
        {id: 2, title: "abcd", price: 16, quantity: 10, like: 0},
        {id: 3, title: "chakiba", price: 16, quantity: 147, like: 0},
        {id: 4, title: "T-shirt 3", price: 16, quantity: 1258, like: 0},
        {id: 5, title: "T-shirt 4", price: 16, quantity: 1321, like: 0}

      ]}
  addlike(i:number){
    this.ProductList[i].like++
  }

  add(i:number){
    this.ProductList[i].quantity--
  }


}
