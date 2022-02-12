import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles:[`
        .pointer{
          cursor:pointer;
        }
        `]
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToCards(){
    this.router.navigate([""]);
  }

  goToCarrousel(){
    this.router.navigate(["carrousel"])
  }
  
}
