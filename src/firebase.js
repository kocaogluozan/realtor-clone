// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBqEZ-87upT15j7jaouSE8mawIi8kAQVs",
  authDomain: "realtor-clone-a467d.firebaseapp.com",
  projectId: "realtor-clone-a467d",
  storageBucket: "realtor-clone-a467d.appspot.com",
  messagingSenderId: "255372938059",
  appId: "1:255372938059:web:8a25902ffdc2f31a5db6ce",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
