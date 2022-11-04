import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exemple} from "../../model/exemple";

@Injectable({
  providedIn: 'root'
})
export class ExempleService {

  constructor(private httpClient: HttpClient) {

  }

  exempleUrl: string = 'api/exemple/'
  public list!: Exemple[];

  getExemple() {
    return this.httpClient.get<Exemple[]>(this.exempleUrl)
  }
}
