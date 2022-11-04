import { Component, OnInit } from '@angular/core';
import {Exemple} from "../../model/exemple";
import {ExempleService} from "../service/exemple.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
exemple!: Exemple;
listExemple! : Exemple[];
  constructor(private exempleService:ExempleService) { }

  ngOnInit(): void {
    this.exemple = new Exemple()
    this.exempleService.getExemple().subscribe(
      (data:Exemple[])=>this.listExemple=data,);


  }

}
