import {Component} from "@angular/core";
import { heroes } from "./heroes.model";
@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html'
})
export class CardsComponent{
    heroes = heroes;
}