import { Component, OnInit, Input } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  nameOfMuseum: string;
  museumAdress: string;
  museumZip: string;
  ville: string;
  museumPhone: string;
  fax: string;
  museumSite: string;
  museumOpening: string;
  museumRef: string;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef'];
    this.nameOfMuseum = this.museumListService.getMuseumByRef(museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumByRef(museumRef).adr;
    this.museumZip = this.museumListService.getMuseumByRef(museumRef).cp;
    this.ville = this.museumListService.getMuseumByRef(museumRef).ville;
    this.museumPhone = this.museumListService.getMuseumByRef(museumRef).telephone;
    this.fax = this.museumListService.getMuseumByRef(museumRef).fax;
    this.museumSite = this.museumListService.getMuseumByRef(museumRef).sitweb;
    this.museumOpening = this.museumListService.getMuseumByRef(museumRef).periode_ouverture;
  }

}
