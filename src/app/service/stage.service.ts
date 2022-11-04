import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {stage} from "../model/Stage";

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private httpClient: HttpClient) {
  }

  stageUrl: string = 'api/stage/'
  public list!: stage[];

  getStage() {
    return this.httpClient.get<stage[]>(this.stageUrl)
  }

  postStage(s: stage) {
    return this.httpClient.post(this.stageUrl, s);
  }

  deleteStage(id: number) {
    return this.httpClient.delete(this.stageUrl + id)
  }
  updateStage(id:number,s:stage){
    return this.httpClient.put(this.stageUrl+id,s)
  }
  getProductById(id:number){
    return this.httpClient.get<stage>(this.stageUrl+id)
  }

}
