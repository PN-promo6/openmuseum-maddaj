import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  nameOfMuseum: string;
  museumOpening: string;

  constructor(private museumListService:MuseumListService, private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nameOfMuseum = this.museumListService.getMuseumById(+id).nom_du_musee;
    this.museumOpening=this.museumListService.getMuseumById(+id).periode_ouverture;
  }

}
