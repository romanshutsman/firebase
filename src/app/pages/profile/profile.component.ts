import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ImageService } from './../../image.service';
import { Observable } from "rxjs/Observable";
import { GalleryImage  } from './../../models/galleryimage.model';
import * as firebase from 'firebase';
// import { AngularFire } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges  {
  imagesTemp: any = [];
  // images: Observable<GalleryImage[]>
  images = [];
  constructor(private auth: AuthService, private img: ImageService) { }

  ngOnInit() {
    // this.images = this.img.getImages();
  }
  handleFiles(event){
    let file = event.srcElement.files;
    console.log(file);
    console.log(event.srcElement.files);
    console.log(event.target.value);
    if (file[0]) {
      if (file[0].size <= 2228571) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            console.log(event);
            this.imagesTemp.push({ url: event.target.result, file: file[0] });
            console.log(this.imagesTemp);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
        // this.sliderImagesTemp.push(file[0]);
        // this.sliderImages;
      }
      else {
        alert('File size must be less than 2MB.');
      }
    }
  }
  uploadFiles(){
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var imagesRef = storageRef.child('images');
    console.log(imagesRef);

    var fileName = this.imagesTemp;
    var spaceRef = imagesRef.child(fileName);

    // ref.put(file).then(function (snapshot) {
    //   console.log('Uploaded a blob or file!');
    // });
  }
  logout() {
    this.auth.logout();
    this.auth.userChange();
  }
  ngOnChanges() {
    // this.images = this.img.getImages();
  }
}
