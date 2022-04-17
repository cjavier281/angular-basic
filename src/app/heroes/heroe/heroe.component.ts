import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'./heroe.component.html'
})

export class HeroesComponent{
nombre:string='iron Man';
edad:number=45;
 obtenerNombre():string{

    return `${this.nombre} - ${this.edad}`;
  
}   

get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

cambiarHeroe():void{
    this.nombre="Spiderman";
    this.edad=22;
}
cambiarEdad():void{
this.edad=30;    
}
}
