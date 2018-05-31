import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()

// create class
export class FirebaseService {
    // define users
    users: FirebaseListObservable<User[]>;

    constructor(private af: AngularFireDatabase) {

    }

    // get users from firebase db
    getUsers() {
        this.users = this.af.list('/users') as FirebaseListObservable<User[]>;

        return this.users;
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
    gender: string;
    inRelation: boolean;
    likes: number;
}
