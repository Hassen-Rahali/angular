import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterStageComponent} from "./ajouter-stage/ajouter-stage.component";
import {ListeStageComponent} from "./liste-stage/liste-stage.component";

const routes: Routes = [
  {path:'ajouter',component :AjouterStageComponent},
  {path:'consulterListe',component :ListeStageComponent},
  {path:'update/:id', component: AjouterStageComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
