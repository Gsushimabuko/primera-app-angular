import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>
  
    <p> La base es {{base}} </p>

    <button (click)="acumular(-base)" >  - {{base}} </button>
    <span>{{numero}}</span>
    <button  (click)="acumular(+base)" >  + {{base}} </button>

    `
})

export class ContadorComponent {

    base: number =  5
  titulo:string = 'Contador App';
  numero:number = 10

  acumular (valor:number) {
    this.numero += valor
  }
}