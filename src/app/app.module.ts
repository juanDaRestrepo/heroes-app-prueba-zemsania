import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HeroViewComponent } from './hero-view/hero-view.component'

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'carrousel', component: CarrouselComponent},
  {path: 'hero/:id', component: HeroViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,CardsComponent, CardComponent, CarrouselComponent, HeroViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
