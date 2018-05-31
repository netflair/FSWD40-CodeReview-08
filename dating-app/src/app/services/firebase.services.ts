import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { all } from 'q';

@Injectable()

// create class
export class FirebaseService {
    users: FirebaseListObservable<User[]>;
    genders: FirebaseListObservable<Gender[]>;

    constructor(private af: AngularFireDatabase) {

    }

    // get users from firebase db
    getUsers(gender: string = null) {
        if (gender === 'all') {
            this.users = this.af.list('/users') as FirebaseListObservable<User[]>;
        }else if (gender != null) {
            this.users = this.af.list('/users', {
                query: {
                    orderByChild: 'gender',
                    equalTo: gender
                }
            }) as FirebaseListObservable<User[]>;
        }else {
            this.users = this.af.list('/users') as FirebaseListObservable<User[]>;
        }
        return this.users;
    }

    getGenders() {
        this.genders = this.af.list('/genders') as FirebaseListObservable<Gender[]>;
        return this.genders;
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
