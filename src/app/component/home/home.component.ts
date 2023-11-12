import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  previewPosts = [
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      by: 'John Doe',
      date: 'September 24, 2023'
    },
    {
      title: 'Another post title',
      subtitle: 'Subtitle for another post',
      by: 'Jane Smith',
      date: 'October 10, 2023'
    },
    {
      title: 'Another post title',
      subtitle: 'Subtitle for another post',
      by: 'Jane Smith',
      date: 'October 10, 2023'
    },
    {
      title: 'Another post title',
      subtitle: 'Subtitle for another post',
      by: 'Jane Smith',
      date: 'October 10, 2023'
    },
    {
      title: 'Another post title',
      subtitle: 'Subtitle for another post',
      by: 'Jane Smith',
      date: 'October 10, 2023'
    }
  ];
  

  constructor() {}

  

  ngOnInit(): void {    
  }

  

}
