import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { CarrouselComponent } from './carrousel/carrousel.component'

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'carrousel', component: CarrouselComponent}
]

@NgModule({
  declarations: [
    AppComponent,CardsComponent, CardComponent, CarrouselComponent
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
