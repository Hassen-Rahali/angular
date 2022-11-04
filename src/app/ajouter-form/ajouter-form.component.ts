import { Component, OnInit } from '@angular/core';
import {Exemple} from "../../model/exemple";

@Component({
  selector: 'app-ajouter-form',
  templateUrl: './ajouter-form.component.html',
  styleUrls: ['./ajouter-form.component.css']
})
export class AjouterFormComponent implements OnInit {
exemple! : Exemple;
listeExemple! : Exemple[];
  constructor() { }

  ngOnInit(): void {

  }

}
