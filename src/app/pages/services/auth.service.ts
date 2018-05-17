// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import * as firebase from 'firebase';  
import { error } from 'protractor';

@Injectable()
export class AuthService {

//   auth0 = new auth0.WebAuth({
//     clientID: 'tdrtuQd3GJR75XNCvZStZ3KMnSjlnSs5',
//     domain: 'shutsman.eu.auth0.com',
//     responseType: 'token id_token',
//     audience: 'https://shutsman.eu.auth0.com/userinfo',
//     redirectUri: 'http://localhost:3000/callback',
//     scope: 'openid'
//   });

  constructor(public router: Router) {
    //   this.userChange();
  }

//   public login(): void {
//     this.auth0.authorize();
//   }
signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( response => console.log(response))
    .catch(error => console.log(error));
}
logout() {
    firebase.auth().signOut()
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
userChange() {
    // let user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged( user => {
        if (user) {
            console.log("IN");
        } else {
            console.log("OUT");
        }
    });
}

}