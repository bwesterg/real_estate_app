// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "happy-mountains-land-brokers.firebaseapp.com",
  projectId: "happy-mountains-land-brokers",
  storageBucket: "happy-mountains-land-brokers.appspot.com",
  messagingSenderId: "9504336962",
  appId: "1:9504336962:web:559cd559cb177ff3cc91db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);