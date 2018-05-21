// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import * as firebase from 'firebase';  
import { error } from 'protractor';
import { User } from "./../../models/user.model";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    public userData: any;
    public fireAuth: any;
    private user: Observable<firebase.User>;
//   auth0 = new auth0.WebAuth({
//     clientID: 'tdrtuQd3GJR75XNCvZStZ3KMnSjlnSs5',
//     domain: 'shutsman.eu.auth0.com',
//     responseType: 'token id_token',
//     audience: 'https://shutsman.eu.auth0.com/userinfo',
//     redirectUri: 'http://localhost:3000/callback',
//     scope: 'openid'
//   });

    constructor(public router: Router, private afAuth: AngularFireAuth) {
        this.fireAuth = firebase.auth();
        this.userData = firebase.database().ref('/userData');
        console.log(this.userData);
        this.user = afAuth.authState;
  }

//   public login(): void {
//     this.auth0.authorize();
//   }
signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
            response.sendEmailVerification();
            this.userData.child(response.uid).set(
                {
                    email: email,
                    name: name
                });
            })
    .catch(error => console.log(error));
}
login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => console.log(response))
    .catch(error => console.log(error));
}
logout() {
    firebase.auth().signOut()
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
    // login(user: User) {
    //     return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    // }

    // logout() {
    //     return this.afAuth.auth.signOut();
    // }
userChange() {
    // let user = firebase.auth().currentUser;
    return firebase.auth().onAuthStateChanged( user => {
        if (user) {
            console.log(user.uid, "IN");
            localStorage.setItem('uid', user.uid)
            return true;
        } else {
            // localStorage.clear();
            localStorage.setItem('uid', null)
            console.log("OUT");
            return false;
        }
    });
}
    authUser() {
        return this.user;
    }

}