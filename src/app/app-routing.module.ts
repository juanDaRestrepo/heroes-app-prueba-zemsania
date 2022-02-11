import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HeroViewComponent } from './hero-view/hero-view.component';

const routes: Routes = [
  {path: '',component: CardsComponent},
  {path: 'carrousel',component: CarrouselComponent},
  {path: 'heroview/:id',component: HeroViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
