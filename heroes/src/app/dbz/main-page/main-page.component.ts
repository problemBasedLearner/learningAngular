import { Component, Input } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  // Now we define an array in wich we are introducing Personaje defined objects
  personajesArr: Personaje[] = [

    {
      nombre: 'Broli',
      poder: 123
    },

    {
      nombre: 'Brocoli',
      poder: 12394871212341234
    },

    {
      nombre: 'Anselmo',
      poder: 1
    },

  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
  

  agregarNuevoPersonaje( arg: Personaje ) {
    console.log(arg);
    this.personajesArr.push(arg);
  }
  
}
