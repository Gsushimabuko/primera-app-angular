import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

heroes: string[] = ['Deku','Bakugo','All Might']
cadena: string = ""


borrarHeroe(){
   
   this.cadena = this.heroes.shift() || ""
   
  }

}
