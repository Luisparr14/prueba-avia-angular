import { Component, OnInit, Input } from '@angular/core';
import { HotelsService, Hotel } from '../hotels.service';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  
  @Input() hotels!: Hotel[];

  constructor(

  ) { }

  ngOnInit(): void {
    
  }

  infoHotel(hotel: Hotel){
    window.alert(`Hotel: ${hotel.name} \nPrecio: ${hotel.price} \nEstrellas: ${hotel.stars} \nAmenities: \n${hotel.amenities.map(amenity => ' '+amenity + '\n')}`);
  }
}
