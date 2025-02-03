import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-playing',
  imports: [],
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.css'
})
export class PlayingComponent implements OnInit , OnDestroy {

 private readonly movieService = inject(MovieService)
 myres!:Subscription
 movies:Imovie[] = []
 category:string = 'now_playing'
baseUrl:string = 'https://image.tmdb.org/t/p/original'

 getPlaying():void{
  this.myres = this.movieService.getmovie(this.category).subscribe({
    next: (res)=>{
     
      this.movies = res.results
  
    },
    error:(err)=>{console.log(err)},
  })

 }



 ngOnInit(): void {
 this.getPlaying()
 }


 ngOnDestroy(): void {
  this.myres.unsubscribe()
  
 }

}
