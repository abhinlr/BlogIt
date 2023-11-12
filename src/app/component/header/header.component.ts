import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute : string = '/';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    });
  }


  ngOnInit(): void {
  }

}
