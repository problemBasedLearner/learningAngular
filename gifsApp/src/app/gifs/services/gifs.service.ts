import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey : string = 'Tb51KUh1cZC4Rh1qTbWpd8itCMjYBWTI'

  private _historialArr : string[] = []

  // Adding get method to the class we can access the content of the function by calling it as any other class key
  // https://www.youtube.com/watch?v=bl98dm7vJt0
  // In this case the function creates a new array with the existing historial array spreaded
  get historial() {
    return [...this._historialArr]
  }

  buscarGifs( searchTopic : string ) {
    if (!this._historialArr.map(a => a.toLowerCase()).includes(searchTopic.toLowerCase())) {
      this._historialArr.unshift( searchTopic )
      console.log(this._historialArr)
      this._historialArr = this._historialArr.splice(0,10)  
    }
  }
}
