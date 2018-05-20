import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './pages/services/auth.service';
import * as firebase from 'firebase';  
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService){
    
  }
  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyAMxRxMFC2aYR0TVf8GeFconII7CqgquM8",
    //   authDomain: "cloud-d2c07.firebaseapp.com",
    //   databaseURL: "https://cloud-d2c07.firebaseio.com",
    //   projectId: "cloud-d2c07",
    //   storageBucket: "cloud-d2c07.appspot.com",
    //   messagingSenderId: "593448757807"
    // })
  }
  qwert() {
    console.log(this.auth.authUser());
    console.log(this.auth.userChange());

    // this.auth.authUser();
  }

}
