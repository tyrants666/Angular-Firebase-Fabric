import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { getAuth } from 'firebase/auth';
import { User } from "../services/user";
import firebase from 'firebase/compat';

const auth = getAuth;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;  // save logged in user data

  constructor(
    public afs: AngularFirestore,    // Inject Firebase auth service
    public afAuth: AngularFireAuth,  // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone            // NgZone service to remove outside scope warning
  ) { 
    /* Saving user data in localstorage when logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        console.log(localStorage.getItem('user'));
        
      } else {
        localStorage.setItem('user', null as any);
        JSON.parse(localStorage.getItem('user')!);
        console.log(localStorage.getItem('user'));
        
      }
    })
  }

  // Sign in with Google
  GoogleAuth() {
    const googleAuthProvider = new GoogleAuthProvider();
    return this.afAuth.signInWithPopup(googleAuthProvider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        this.ngZone.run(() => {
          setTimeout(() => {
            this.router.navigate(['playground']);
          }, 10);
        })
      this.SetUserData(result.user);
      console.log("USER : "+result.user);
      
      }).catch((error) => {
        window.alert(error) 
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: firebase.User | null) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    })
  }

}