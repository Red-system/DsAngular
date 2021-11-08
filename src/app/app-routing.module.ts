import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOurMoviesComponent } from './all-our-movies/all-our-movies.component';
import { ImgHeroComponent } from './img-hero/img-hero.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', component: ImgHeroComponent },
  { path: "movies", component: AllOurMoviesComponent },
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ImgHeroComponent,
  AllOurMoviesComponent,
  ListComponent
]