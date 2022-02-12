import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from "../HeroesService.service";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  providers:[HeroesService]
})
export class CarrouselComponent implements OnInit, OnDestroy {

  /* This variable is important because it tells the card component how to send the parameter to the goToHero method  */
  carrouselOn:boolean= false;
  constructor(private heroesService:HeroesService){

  }
  heroOne = this.heroesService.returnFirstHero();
  restOfHeroes =this.heroesService.returnAllHeroesWithoutfirstHero();

/* Lyfecycle to tell the card component if it is rendering the cards in the carrousel componenent to work with the object diferently 
  in the card component and view
*/
  ngOnInit(): void {
    this.carrouselOn = true;
    console.log(this.carrouselOn);
  }

  ngOnDestroy(): void {
      this.carrouselOn = false;
  }
  /* --------------------------------------------------------------------------------------------------------------------------------- */

}
