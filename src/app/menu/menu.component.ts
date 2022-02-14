import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".menu-slide", {
      grabCursor:true,
      loop:true,
      centeredSlides:true,
      autoHeight : true,
      spaceBetween : 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
    });
  }

}
