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
    heroes = this.heroesService.returnAllHeroes();
}