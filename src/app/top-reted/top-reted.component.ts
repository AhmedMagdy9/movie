import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-top-reted',
  imports: [],
  templateUrl: './top-reted.component.html',
  styleUrl: './top-reted.component.css'
})
export class TopRetedComponent implements OnInit , OnDestroy {
 
  private readonly movieService = inject(MovieService)
  myres!:Subscription
  movies:Imovie[] = []
  category:string = 'top_rated'
 baseUrl:string = 'https://image.tmdb.org/t/p/original'
 
  getReted():void{
   this.myres = this.movieService.getmovie(this.category).subscribe({
     next: (res)=>{
     
       this.movies = res.results
   
     },
     error:(err)=>{console.log(err)},
   })
 
  }
 
 
 
  ngOnInit(): void {
  this.getReted()
  }
 
 
  ngOnDestroy(): void {
   this.myres.unsubscribe()
   
  }

}
