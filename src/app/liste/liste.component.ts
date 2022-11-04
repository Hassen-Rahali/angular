import { Component, OnInit } from '@angular/core';
import {stage} from "../model/Stage";
import {StageService} from "../service/stage.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})


export class ListeComponent implements OnInit {
  search:string="";
  stage!:stage;
  liststage!:stage[];
  constructor(private stageService:StageService) { }

  ngOnInit(): void {
    this.stage= new stage()

    this.stageService.getStage().subscribe(
      (data:stage[])=>this.liststage=data,);

  }
  incrementinterresse(stage:stage){
    let i = this.liststage.indexOf(stage);
    if(i!=-1){
      this.liststage[i].nbrInteresse++;
    }
  }

delete(stage:stage){
    this.stageService.deleteStage(stage.id).subscribe(
      ()=>{
        let i = this.liststage.indexOf(stage)
        this.liststage.splice(i,1)
      }
    )
}

}
