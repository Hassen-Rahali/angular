import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = "le menu du la page d'accuele"
  proprety1="bonjour"
  methodeA(){
    return 2
  }
  proprety:boolean=true;
  proprety2:boolean=false;
  constructor() { }
message:string='';
  methodeB(){
    this.message="vous avez cliker sue le bouton pk?";
  }

  proprety3:string='omar et chakiba';



  ngOnInit(): void {

  }

}
