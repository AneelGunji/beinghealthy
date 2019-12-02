import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
 
  slides;
  slideConfig
 
  constructor() { }

  ngOnInit() {
    this.slides = [
      { img: "assets/images/2.jpg" },
      { img: "assets/images/3.jpg" },
      { img: "assets/images/4.png" },
      { img: "assets/images/5.jpg" },
      { img: "assets/images/6.jpg" }
    ];
    this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
