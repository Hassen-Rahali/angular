import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterFormComponent} from "./ajouter-form/ajouter-form.component";
import {ListComponent} from "./list/list.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path:'ajouter',component :AjouterFormComponent},
  {path:'consulterListe',component :ListComponent},
  { path: '',redirectTo: 'consulterListe', pathMatch: 'full' },
  {path:'**',component :NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
