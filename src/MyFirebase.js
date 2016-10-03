import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDnycLqte3CiINIbtyJPeiZph0V18hzF8k",
    authDomain: "iterate-workshop.firebaseapp.com",
    databaseURL: "https://iterate-workshop.firebaseio.com",
    storageBucket: "iterate-workshop.appspot.com",
    messagingSenderId: "672693345005"
};

export const FIREBASE_APP = firebase.initializeApp(config);
export const FIREBASE_REF = FIREBASE_APP.database().ref();
export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;
