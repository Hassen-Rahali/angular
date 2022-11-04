import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  product!:Product;

  constructor() { }

  ngOnInit(): void {
  this.product=new Product();

    }
  save(): void{
    console.log(this.product)
  }
}
