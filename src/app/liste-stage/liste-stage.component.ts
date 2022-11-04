import { Component, OnInit } from '@angular/core';
import {stage} from "../model/Stage";
import {StageService} from "../service/stage.service";

@Component({
  selector: 'app-liste-stage',
  templateUrl: './liste-stage.component.html',
  styleUrls: ['./liste-stage.component.css']
})


export class ListeStageComponent implements OnInit {
  search:string="";
  stage!:stage;
  liststage!:stage[];
  constructor(private stageService:StageService) { }

  ngOnInit(): void {
    this.stage= new stage()

    this.stageService.getStage().subscribe(
      (data:stage[])=>this.liststage=data,);

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
