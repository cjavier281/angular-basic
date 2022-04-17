import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html'
})

export class ContadorComponent{

    titulo:string ="Mi aplicacion contador";
    numero:number=0;
    acumulador=5;
    
     acumular(valor:number){
     this.numero+=valor;
    }
    
}