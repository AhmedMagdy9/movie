import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { log } from 'console';
import { Subscription } from 'rxjs';
import { Imovie } from '../imovie';


@Component({
  selector: 'app-popular',
  imports: [],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit , OnDestroy {

 private readonly movieService = inject(MovieService)
 myres!:Subscription



 movies:Imovie[] = []
 category:string = 'popular'
baseUrl:string = 'https://image.tmdb.org/t/p/original'





 getpopular():void{
  this.myres = this.movieService.getmovie(this.category).subscribe({
    next: (res)=>{
    
      this.movies = res.results
     
      console.log(this.movies)
    },
    error:(err)=>{console.log(err)},
  })

 }



 ngOnInit(): void {
 this.getpopular()
 }


 ngOnDestroy(): void {
  this.myres.unsubscribe()
  
 }


}
