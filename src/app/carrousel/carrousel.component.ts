import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from "../HeroesService.service";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  providers:[HeroesService]
})
export class CarrouselComponent implements OnInit, OnDestroy {
  carrouselOn:boolean= false;
  constructor(private heroesService:HeroesService){

  }
  heroOne = this.heroesService.returnFirstHero();
  restOfHeroes =this.heroesService.returnAllHeroesWithoutfirstHero();


  ngOnInit(): void {
    this.carrouselOn = true;
    console.log(this.carrouselOn);
  }

  ngOnDestroy(): void {
      this.carrouselOn = false;
  }

}
