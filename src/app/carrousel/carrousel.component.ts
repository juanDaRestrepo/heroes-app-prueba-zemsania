import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../HeroesService.service";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  providers:[HeroesService]
})
export class CarrouselComponent implements OnInit {

  constructor(private heroesService:HeroesService){

  }
  heroOne = this.heroesService.returnFirstHero();
  restOfHeroes =this.heroesService.returnAllHeroesWithoutfirstHero();


  ngOnInit(): void {
    console.log(this.heroOne);
  }

}
