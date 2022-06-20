import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';


  


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
 
export class SearchComponent {

  constructor() { }

  searchTopic:string = ''


  searchGif() {
    console.log(this.searchTopic);
    this.searchTopic = ''  
  }
}
