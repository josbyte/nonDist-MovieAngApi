import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {

    let url = "http://image.tmdb.org/t/p/w400";

    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      if (pelicula.backdrop_path) {
        return url + pelicula.backdrop_path;
      } else {
        return "assets/img/noimage.png";
      }
    }
  }

}
