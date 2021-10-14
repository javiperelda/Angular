import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireModule } from '@angular/fire';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public logueado: boolean = false;
  public muestra: string = "none";
  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth){
        console.log('Login True');
        this.logueado = true;
        this.muestra  = "";
      } else {
        console.log('Login False');
        this.logueado = false;
        this.muestra  = "none";
      }
    });
  }

  onLogout() {
    this.afsAuth.signOut();
  }

}
