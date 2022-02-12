import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../HeroesService.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  providers: [HeroesService]
})
export class HeroViewComponent {
 
  constructor(private heroesService: HeroesService, private route:ActivatedRoute,private router:Router, private location: Location) { }

  /* Here is used a service to load an especic hero to show it in the view of this component */
  heroToShow=this.heroesService.returnSelectedHero(this.route.snapshot.params['id']);

  
 
  handleReturn(){
    this.location.back()
  }

}
