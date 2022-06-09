import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // We can validate form using code such as the next one
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    
    // We have to redefine the whole variable, that was previously associated with the form input fields
    this.nuevo = { nombre: '', poder: 0 };

  }
 

}

