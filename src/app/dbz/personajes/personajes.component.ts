import { Component} from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent{

  get personajes(){
    return this.servicio.personajes;
  }

  constructor(private servicio: DbzService){

  }

  //@Input ('personajesDelPadre') personajes: Personaje[] = []

}
