import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  loginEmailUser(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afsAuth.signInWithEmailAndPassword(email,pass)
      .then( userInfo => resolve(userInfo),
      err => reject (err));
    });
  }

  loginFacebookUser(){
    try {
      console.log("entro");
      return this.afsAuth.signInWithPopup(new auth.FacebookAuthProvider);
    } catch (error) {
      console.error(error);
    }
  }
  loginGoogleUser(){
    try {
     return this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.error(error);
    }
  }


  logoutUser(){
    this.afsAuth.signOut();
  }


  
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }


}
