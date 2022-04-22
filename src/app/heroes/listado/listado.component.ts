import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes :string[] =['Spiderman','Batman','Hulk','Thor','Superman'];
HeroeBorrado:string='';
BorrarHeroe(){
  this.HeroeBorrado=this.heroes.shift()||'';
}


}