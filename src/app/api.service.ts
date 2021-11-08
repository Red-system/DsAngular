import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static getdata() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  getData(param: string): Observable<any> {
    let apiKey = "de1980c43e3ab1c282901019c92f0c8e"
    let url = `https://api.themoviedb.org/3/${param}?api_key=${apiKey}`
    return this.http.get(url);
  }
}
