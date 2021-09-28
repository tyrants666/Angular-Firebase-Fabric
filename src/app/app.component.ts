import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from "firebase/compat/app";
// import { GoogleAuthProvider } from "firebase/auth";
// import { firebase } from "firebase/app";

// import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() { }


  // signIn() {
  //   // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   const googleAuthProvider = new GoogleAuthProvider();
  //   this.afAuth.signInWithPopup(googleAuthProvider);
  // } 

  // signOut() {
  //   this.afAuth.signOut();
  // }
}