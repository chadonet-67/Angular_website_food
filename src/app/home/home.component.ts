import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".home-slider",{
      grabCursor:true,
      loop:true,
      navigation : {
          nextEl : ".swiper-button-next",
          prevEl : ".swiper-button-prev",
      },
  });
  }

}
