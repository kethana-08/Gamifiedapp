// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyApjgdJsHUjiY_iABwq3xr2NgAA71I6pzI",
  authDomain: "gamefiedapp.firebaseapp.com",
  projectId: "gamefiedapp",
  storageBucket: "gamefiedapp.firebasestorage.app",
  messagingSenderId: "301066702119",
  appId: "1:301066702119:web:e7113123d6ccb6cec6ed02",
  measurementId: "G-FX45BDHXGD"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
