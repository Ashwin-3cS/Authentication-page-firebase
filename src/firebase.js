import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4xO_3FWO5O4W-dSNxud1osqEqTOdroOU",
  authDomain: "donator-webapp.firebaseapp.com",
  projectId: "donator-webapp",
  storageBucket: "donator-webapp.appspot.com",
  messagingSenderId: "589580801171",
  appId: "1:589580801171:web:44abf35e655a2879c06966",
  measurementId: "G-DL0C1PKQE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth();
export default app;