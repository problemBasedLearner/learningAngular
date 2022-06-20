import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTopic: string = ''

  // By using constructor we create gifsService obj by instanciating GifsService class
  // GifsService is defined in ../services/gifs.service.ts
  constructor( private gifsService: GifsService ) {}

  searchGif() {
    if (this.searchTopic.trim() != '') {
      this.gifsService.buscarGifs( this.searchTopic )
      // console.log(this.searchTopic);
      this.searchTopic = ''
    }
  }
}
