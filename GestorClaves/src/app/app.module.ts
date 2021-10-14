import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from "angular2-flash-messages";
import { FlashMessagesService } from "angular2-flash-messages";
// import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ConexionService } from "./services/conexion.service";
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthGuard } from "../app/components/guard/auth.guard";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarModule} from 'ng-sidebar';


// const routes: Routes = [
//   {path: 'claves', component: ListaComponent},
//   {path: 'add', component: ListaAddComponent},
//   {path: 'login', component: LoginComponent},
//   { path: '',  component: HomeComponent, pathMatch:'full'},
//   { path: '**', redirectTo: '/',pathMatch:'full'}
// ];

const routes: Routes = [
  {path: 'side', component: SidebarComponent},
  {path: 'claves', component: ListaComponent,  canActivate:[AuthGuard]},
  {path: 'add', component: ListaAddComponent, canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent,  canActivate:[AuthGuard]},
  { path: '',  component: LoginComponent, pathMatch:'full'},
  { path: '**', redirectTo: '/',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule,
    SidebarModule

  ],
  providers: [
    ConexionService,
    FlashMessagesService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
