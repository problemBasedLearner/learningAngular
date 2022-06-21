import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor( private gifService : GifsService ) { }

  get resultados() {
    return this.gifService.resultadosPeticion
  }
}
