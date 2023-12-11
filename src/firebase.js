// firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    piKey: "AIzaSyDGm59zIQORI8uO81DfHbp_aGZfDLTzgZQ",
    authDomain: "kick-4bdfc.firebaseapp.com",
    projectId: "kick-4bdfc",
    storageBucket: "kick-4bdfc.appspot.com",
    messagingSenderId: "699513004030",
    appId: "1:699513004030:web:4731769b6b72f0cc972aaf",
    measurementId: "G-ENLY42H1VS"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
