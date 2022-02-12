import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
 
})
export class CardComponent implements OnInit {
 
  @Input() hero:any;
  @Input() heroOne:any;
  @Input() i:number;

  constructor  (private router:Router) { }

  ngOnInit(): void {
      
  }

  goToHero(id:number){
    this.router.navigate([`heroview/${id}`])
  }
}
