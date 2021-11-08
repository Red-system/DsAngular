import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ListUpdateService } from '../list-update.service'


@Component({
  selector: 'app-all-our-movies',
  templateUrl: './all-our-movies.component.html',
  styleUrls: ['./all-our-movies.component.css'],
})

export class AllOurMoviesComponent implements OnInit {


  public movieTitle = "";
  public listMovies: Array<any> = [];
  public listGenre: Array<any> = [];

  getMovie(movie: object) {
    this.listService.setMovies(movie)
  }

  constructor(private apiService: ApiService, private listService: ListUpdateService) {
  }

  ngOnInit(): void {

    this.apiService.getData("movie/popular").subscribe(data => {
      this.listMovies = data.results;

    });

    this.apiService.getData("/genre/movie/list").subscribe(genres => {
      this.listGenre = genres.results;

    });

    this.listService.getCookies();

  }

}
