import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey            : string = 'Tb51KUh1cZC4Rh1qTbWpd8itCMjYBWTI'
  private _historialArr     : string[] = []
  public resultadosPeticion : any[] = [] // TODO cambiar tipo any

  // Adding get method to the class we can access the content of the function by calling it as any other class key
  // https://www.youtube.com/watch?v=bl98dm7vJt0
  // In this case the function creates a new array with the existing historial array spreaded
  get historial() {
    return [...this._historialArr]
  }

  constructor( private http: HttpClient ) {}

  buscarGifs( searchTopic : string ) {
    // control the search history array
    // if the field already exists we dont include it
    if (!this._historialArr.map(a => a.toLowerCase()).includes(searchTopic.toLowerCase())) {

      this._historialArr.unshift( searchTopic )
      // console.log( this._historialArr )
      this._historialArr = this._historialArr.splice(0,10)
    }

    // We can fetch an url by using httpClient module
    // Be aware we have to import it in app.modules and inyect it through the constructor

    // In this case we first init the empty variable resultadosPeticion
    // We then make a fetch in the API by using the HTTP Client Module
    // We asign the result value to the vatiable
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${searchTopic}&limit=10`)
    .subscribe( (resp : any ) => {
      // console.log( resp )
      this.resultadosPeticion = resp.data
    })
  }
}
