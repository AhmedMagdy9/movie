import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private httpClient:HttpClient) { }


  getmovie(category:string):Observable<any>{

  return  this.httpClient.get(`https://api.themoviedb.org/3/movie/${category}?api_key=866cd3a065ef9304a549f1d65e494940`)

  }
}
