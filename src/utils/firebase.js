// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBqqDzkfPfY6cmiMuqsUS67f6sA7mMJbc",
  authDomain: "netflixgpt-3d11b.firebaseapp.com",
  projectId: "netflixgpt-3d11b",
  storageBucket: "netflixgpt-3d11b.appspot.com",
  messagingSenderId: "381614472195",
  appId: "1:381614472195:web:62fa52f22893316bbb2236",
  measurementId: "G-00909SNBY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
