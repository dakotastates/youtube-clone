// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN3a36zlHUZfBJZiLNgF9_48ncJa02pBM",
  authDomain: "clone-9d17d.firebaseapp.com",
  projectId: "clone-9d17d",
  storageBucket: "clone-9d17d.appspot.com",
  messagingSenderId: "615641323186",
  appId: "1:615641323186:web:ab7832e23be37bc3a2dbab",
  measurementId: "G-SXVNBC6H59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
