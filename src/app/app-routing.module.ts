import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterFormComponent} from "./ajouter-form/ajouter-form.component";
import {ListeComponent} from "./liste/liste.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path:'ajouter',component :AjouterFormComponent},
  {path:'consulterListe',component :ListeComponent},
  { path: '',redirectTo: 'consulterListe', pathMatch: 'full' },
  {path:'update/:id', component: AjouterFormComponent},
  {path:'**',component :NotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
