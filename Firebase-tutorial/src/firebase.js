// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fir-frontend-b5b80.firebaseapp.com",
  projectId: "fir-frontend-b5b80",
  storageBucket: "fir-frontend-b5b80.appspot.com",
  messagingSenderId: "165750813517",
  appId: "1:165750813517:web:40868347b104e237c57d04",
  measurementId: "G-V3PF7E2QLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
