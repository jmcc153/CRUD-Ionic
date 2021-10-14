import { Injectable } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import {AngularFireDatabaseModule, AngularFireDatabase} from "@angular/fire/compat/database"
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: "root",
})
export class FireserviceService {
    constructor(
        public firestore: AngularFirestore,
        public auth: AngularFireAuth
    ){}

    loginWithEmail(data) {
        return this.auth.signInWithEmailAndPassword(data.email, data.password);
    }
    signup(data) {
        return this.auth.createUserWithEmailAndPassword(data.email, data.password);
    }
    saveDetails(data){
        return this.firestore.collection("users").doc(data.uid).set(data);
    }
    getDetails(data){
        return this.firestore.collection("users").doc(data.uid).valueChanges();
    }
    logout(){
        return this.auth.signOut()
    }
   get islogged(): boolean {
        const user = JSON.parse(localStorage.getItem('user'))
        return (user !== null) ? true : false;
    }

    async create(collection,data){
        return await this.firestore.collection(collection).add(data);
    }
    async getAll(collection){
        return await this.firestore.collection(collection).snapshotChanges();
    }
    async getById(collection,id){
        return await this.firestore.collection(collection).doc(id).get();
    }
    async delete(collection,id){
        return await this.firestore.collection(collection).doc(id).delete();
    }
    async update(collection,id,data){
        return await this.firestore.collection(collection).doc(id).set(data);
    }



}