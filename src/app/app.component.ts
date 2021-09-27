import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// import { firebase } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public afAuth: AngularFireAuth) { }
  title = 'ang-route-block';


  signIn() {
    // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const googleAuthProvider = new GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  } 

  signOut() {
    this.afAuth.signOut();
  }
}