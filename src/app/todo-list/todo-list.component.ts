import { Component, OnInit } from '@angular/core';
import {todo} from "../model/todo";
import {CalculService} from "../service/calcul.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todolist!:todo[];
  constructor(private calculService:CalculService) { }
  c!:number;
  calcul(){
    this.c=this.calculService.getNumberOf
    (this.todolist,"completed",false)
  }



ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}]
  }
}


