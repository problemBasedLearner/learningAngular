import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

 
  // It's important to mantail type while Input so we generate a interfaces directory and import the class from there
  @Input() personajesArr: Personaje[] = [];


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar() {
    // We can validate form using code such as the next one
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    // We push the new values inside the array
    this.personajesArr.push( this.nuevo );

    console.log(this.nuevo);
  
    // We have to redefine the whole variable, that was previously associated with the form input fields
    this.nuevo = { nombre: '', poder: 0 };

  }
 

}
