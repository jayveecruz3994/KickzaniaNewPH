// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore' 
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGm59zIQORI8uO81DfHbp_aGZfDLTzgZQ",
  authDomain: "kick-4bdfc.firebaseapp.com",
  projectId: "kick-4bdfc",
  storageBucket: "kick-4bdfc.appspot.com",
  messagingSenderId: "699513004030",
  appId: "1:699513004030:web:4731769b6b72f0cc972aaf",
  measurementId: "G-ENLY42H1VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export const db = getFirestore(app);