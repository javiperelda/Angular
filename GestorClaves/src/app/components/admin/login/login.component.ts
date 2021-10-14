import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email: string = '';
  public pass: string  = '';

  ngOnInit(): void {
    this.onLogout();
  }

  onLogin(){
    this.authService.loginEmailUser(this.email,this.pass)
    .then( (res) => {
      this.onLoginRedirect();
    }).catch( err => console.log('err',err));
  }

  onLoginGoogle() {    
      // this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      this.authService.loginGoogleUser()
      .then( (res) =>{
        console.log("entro");
        this.onLoginRedirect();
      }).catch(err => console.log('error', err));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  
  onLoginFacebook() {
    this.authService.loginFacebookUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch( err => console.log('error',err));
  }

  onLoginRedirect(){
    this.router.navigate(["/home"]);
  }

}
