import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDitKVtJvhK79WG7_h2H7QfVwqUn_aNTOs',
  authDomain: 'cr-dating-app.firebaseapp.com',
  databaseURL: 'https://cr-dating-app.firebaseio.com',
  projectId: 'cr-dating-app',
  storageBucket: '',
  messagingSenderId: '342295876395'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
