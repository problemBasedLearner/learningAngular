import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  // For inporting an array for ex, we @Input it from the main view.component.ts where we define it
  // The input must be done as an empty class, as we are redirecting the content from the view .html
  // We can type it in addition by using the inteface we defined previously
  @Input() personajesArr: Personaje[] = [];

}
