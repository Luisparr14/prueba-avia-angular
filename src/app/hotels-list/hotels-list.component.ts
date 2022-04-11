import { environment } from './../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotels.service';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  @Input() hotels!: Hotel[];

  constructor(

  ) { }

  ngOnInit(): void {
    
  }

  infoHotel(hotel: Hotel){
    window.alert(`Hotel: ${hotel.name} \nPrecio: ${hotel.price} \nEstrellas: ${hotel.stars} \nAmenities: ${new Intl.ListFormat().format(hotel.amenities)}`);
  }
}
