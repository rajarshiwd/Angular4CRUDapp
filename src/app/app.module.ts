import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';

export const environment = {
  production : false ,
  firebase : {
    apiKey: "AIzaSyBB2MdYoajk_ODi8JSrwFTRyoMcho6P0U8",
    authDomain: "angular4-b12df.firebaseapp.com",
    databaseURL: "https://angular4-b12df.firebaseio.com",
    projectId: "angular4-b12df",
    storageBucket: "angular4-b12df.appspot.com",
    messagingSenderId: "293308259356"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
