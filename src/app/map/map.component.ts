import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor() {

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.8665231, 2.2069771],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    //L.marker([50.5, 30.5]).addTo(map);
    const marker = L.marker([45.8665231, 2.2069771]);
    marker.addTo(this.map);
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}