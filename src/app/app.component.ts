import { NgModule } from '@angular/core'; 
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BlogIt';
  currentRoute : string = '/';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }
} 
