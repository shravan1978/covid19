import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';
import { UserInfo, userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class CovidstatsService {
  
   

  constructor(private afAuth: AngularFireAuth) { }
  async signInWithGoogle(){
    const credentials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(credentials);
    
  }
}
