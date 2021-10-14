import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from "@angular/fire/compat";
import {AngularFireDatabaseModule, AngularFireDatabase} from "@angular/fire/compat/database"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import { AngularFirestore} from '@angular/fire/compat/firestore'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig), BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [AngularFireDatabase,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
