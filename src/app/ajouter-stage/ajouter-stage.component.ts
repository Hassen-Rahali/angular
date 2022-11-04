import { Component, OnInit } from '@angular/core';
import {stage} from "../model/Stage";
import {StageService} from "../service/stage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-stage',
  templateUrl: './ajouter-stage.component.html',
  styleUrls: ['./ajouter-stage.component.css']
})
export class AjouterStageComponent implements OnInit {

 stage!:stage;
 liststage!:stage[];
  public action! : string;
  constructor(private stageService:StageService,
  private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.stage= new stage();
    console.log(this.currentRoute.snapshot.params['id'])
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.stageService.getProductById(id).subscribe(
        (data: stage)=> this.stage= data
      )
    }else
    {
      this.action = "save";
      this.stage= new stage();
    }

  }
  saveStage(){
    if(this.action == "save"){
      //this.productService.list.push(this.product);
      this.stageService.postStage(this.stage).subscribe(
        ()=>this.router.navigate(['/consulterListe'])
      );
    }
    else{
      this.stageService.updateStage(this.stage.id, this.stage).subscribe(
        ()=>this.router.navigate(['/consulterListe'])
      );
    }
  }
}
