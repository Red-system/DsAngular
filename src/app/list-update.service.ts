import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListUpdateService {

  movies: Array<object> = []
  JSON: any;

  setCookies() {
    localStorage.setItem("movies", this.JSON.stringify(this.movies))
  }
  getCookies() {
    var storedMovies: Array<object> = JSON.parse(localStorage.getItem("movies") || '{}')
    this.movies = storedMovies
  }

  setMovies(movie: object) {
    this.movies.push(movie);
  }

  constructor() { }
}
