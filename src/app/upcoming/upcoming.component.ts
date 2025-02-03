import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-upcoming',
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit , OnDestroy {
private readonly movieService = inject(MovieService)
   myres!:Subscription
   category:string = 'upcoming'
   baseUrl:string = 'https://image.tmdb.org/t/p/original'
   movies:Imovie[] = []

   getComing(){
    this.myres = this.movieService.getmovie(this.category).subscribe({
      next: (res)=>{
        
      
        this.movies = res.results
      

      },
      error:(err)=>{console.log(err)},
    })
   }
  
   ngOnInit(): void {
    this.getComing()
  
   }
  
   ngOnDestroy(): void {
    this.myres.unsubscribe()
    
   }

}
