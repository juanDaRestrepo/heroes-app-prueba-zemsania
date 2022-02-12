import {Component} from "@angular/core";
import { HeroesService } from "../HeroesService.service";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    providers: [HeroesService]
})
export class CardsComponent{
    constructor(private heroesService:HeroesService){

    }
    /* use of the returnAllHeroes method of the HeroesService created to render the array of heroes in difrent ways   */
    heroes = this.heroesService.returnAllHeroes();
}