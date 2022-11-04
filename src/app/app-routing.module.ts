import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {FormComponentComponent} from "./form-component/form-component.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailsComponent} from "./details/details.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CrudComponent} from "./crud/crud.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [

  {path:'Accueil',component :ListProductComponent},
  {path:'Ajoute',component :FormComponentComponent},
  {path:'supprimer',component:TodoListComponent},
  {path:'Accueil/:id',component:DetailsComponent},
  {path:'post',component:PostComponent},
  {path:'affiche',component: CrudComponent},
  { path: '',redirectTo: 'Accueil', pathMatch: 'full' },
  {path:'**',component :NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
