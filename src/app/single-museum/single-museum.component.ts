import { Component, Input, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {

  @Input() nameOfMuseum: string;
  @Input() museumId: number;
  @Input() museumAdress: string;
  @Input() museumZip: string;
  @Input() museumPhone: string;
  @Input() museumSite: string;
  @Input() museumOpening: string;

  constructor(private museumListService:MuseumListService) {

  }

  ngOnInit() {

  }

}
