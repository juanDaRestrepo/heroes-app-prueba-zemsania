import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
 
})
export class CardComponent implements OnInit {
 
  /* data receive from cards an carrousel component to render them correctly in the view */
  @Input() hero:any;
  @Input() heroOne:any;
  @Input() i:number;
  @Input() carrouselOn:boolean;
  
  constructor  (private router:Router) { }

  ngOnInit(): void {
      
  }
  /* method that takes the user to the hero view component depending on the position of in the array  implemented in the hero service*/
  goToHero(id:number){
    this.router.navigate([`heroview/${id}`])
  }
}
