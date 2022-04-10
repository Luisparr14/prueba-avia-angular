import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {  
  constructor(
    private http: HttpClient
  ) { }

  getHotels() {
    return this.http.get<Hotel[]>(environment.apiUrl);
  }
}
