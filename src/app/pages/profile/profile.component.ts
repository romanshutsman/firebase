import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ImageService } from './../../image.service';
import { Observable } from "rxjs/Observable";
import { GalleryImage  } from './../../models/galleryimage.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges  {

  images: Observable<GalleryImage[]>

  constructor(private auth: AuthService, private img: ImageService) { }

  ngOnInit() {
    this.images = this.img.getImages();
  }
  
  logout() {
    this.auth.logout();
    this.auth.userChange();
  }
  ngOnChanges() {
    this.images = this.img.getImages();
  }
}
