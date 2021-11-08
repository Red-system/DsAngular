import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-hero',
  templateUrl: './img-hero.component.html',
  styleUrls: ['./img-hero.component.css']
})
export class ImgHeroComponent implements OnInit {

  moviesactiv = false
  constructor() { }

  ngOnInit(): void {
  }

}
