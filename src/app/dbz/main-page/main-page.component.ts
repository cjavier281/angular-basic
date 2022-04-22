import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

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
nombre:"",  
poder:0
}
cambiarNombre(event:any){
  console.log(event.target.value);
}
agregar():void{
  if(this.nuevo.nombre.trim().length===0){
    return;
  }

  if(this.nuevo.poder===0){
    return;
  }
  this.personajes.push(this.nuevo);
  // event.preventDefault();

  console.log(this.nuevo);
  this.nuevo={
    nombre:"",
    poder:0
  }
}
  }
  