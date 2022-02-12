import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../HeroesService.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  providers: [HeroesService]
})
export class HeroViewComponent implements OnInit{
 
  constructor(private heroesService: HeroesService, private route:ActivatedRoute,private router:Router, private location: Location) { }

  heroToShow=this.heroesService.returnSelectedHero(this.route.snapshot.params['id']);

  ngOnInit(): void {
    console.log(this.heroToShow);
  }
 
  handleReturn(){
    this.location.back()
  }

}
