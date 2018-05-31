import { Component } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FirebaseService } from './services/firebase.services';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})

export class AppComponent implements OnInit {
  users: User[];
  genders: Gender[];


  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit() {

    this._firebaseService.getUsers().subscribe(users => {
      this.users = users;
    });

    this._firebaseService.getGenders().subscribe(genders => {
      this.genders = genders;
    });
  }

  filterGender(gender) {
    this._firebaseService.getUsers(gender).subscribe(users => {
      this.users = users;
    });
  }

  like(e) {
    console.log('LIKE');
  }

}

// define Types
export interface User {
  $key?: string;
  sex: string;
  name: string;
  surname: string;
  myPhoto: string;
  age: number;
  inRelation: boolean;
  likes: number;
}

export interface Gender {
  $key?: string;
  sex: string;
}
