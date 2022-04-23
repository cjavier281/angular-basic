import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes:Personaje[]=[];
nuevo:Personaje={
  nombre:"Roshi",
  poder:30
}
  agregarNuevoPersonaje (event:Personaje){
    this.personajes.push(event);
  }
  
  constructor(private dbzService:DbzService){
    this.personajes=this.dbzService.personajes;
  }
}
  
  