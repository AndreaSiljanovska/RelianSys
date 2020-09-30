import { Component, OnInit } from '@angular/core';
import { INFOS } from '../data/properties';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Carosel',
  templateUrl: './Carosel.component.html',
  styleUrls: ['./Carosel.component.scss']
})
export class CaroselComponent implements OnInit {
  infos = INFOS;
  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    $('#recipeCarousel').carousel({
      interval: 10000
    });
    // tslint:disable-next-line:typedef
    $('.carousel .carousel-item').each(function(){
        const minPerSlide = 3;
        let next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (let i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
          }
    });
  }

}
