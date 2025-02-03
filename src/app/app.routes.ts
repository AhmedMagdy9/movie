import { Routes } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { TopRetedComponent } from './top-reted/top-reted.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PlayingComponent } from './playing/playing.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"" , redirectTo:"popular" , pathMatch:"full" },
    {path:"popular" , component:PopularComponent , title:"popular"},
    {path:"top-reted" , component:TopRetedComponent , title:"top reted"},
    {path:"upcoming" , component:UpcomingComponent , title:"upcoming"},
    {path:"playing" , component:PlayingComponent , title:"playing"},
    {path:"**" , component:NotFoundComponent ,title: "not found"}
];
