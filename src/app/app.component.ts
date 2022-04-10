import { Component, OnInit } from '@angular/core';
import { HotelsService, Hotel } from './hotels.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaAvia';
  hotels: Hotel[] = [];
  constructor(
    private hotelsService: HotelsService
  ) { }

  Buscar(event: any) {
    console.log(event);    
    let hotelsStorage = JSON.parse(window.localStorage.getItem('hotels') || '[]');
    this.hotels = hotelsStorage.filter((hotel: Hotel) => {
      if (hotel.name.toLowerCase().includes(event?.nombre?.toLowerCase())) {
        if (event?.allStars) {
          return hotel;
        }
        if (event?.oneStar) {
          if (hotel.stars === 1) {
            return hotel;
          }
        }
        if (event?.twoStars) {
          if (hotel.stars === 2) {
            return hotel;
          }
        }
        if (event?.threeStars) {
          if (hotel.stars === 3) {
            return hotel;
          }
        }
        if (event?.fourStars) {
          if (hotel.stars === 4) {
            return hotel;
          }
        }
        if (event?.fiveStars) {
          if (hotel.stars === 5) {
            return hotel;
          }
        }
        if (!event?.oneStar && !event?.twoStars && !event?.threeStars && !event?.fourStars && !event?.fiveStars && !event?.allStars) {
          return hotel;
        }
      }
      return null;
    });
  }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
        window.localStorage.setItem('hotels', JSON.stringify(hotels));
      }
    );
  }

}
