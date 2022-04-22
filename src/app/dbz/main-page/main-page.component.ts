import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
personajes:Personaje[]=
[
  {
    nombre:"Test1",
    poder:500
  },
  {
    nombre:"Test2",
    poder:50000
  },
]

nuevo:Personaje={
  nombre:"Roshi",
  poder:30
}

}
  
  