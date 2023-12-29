// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70Bvf8OCVBFrIsOAjtJ8vqNt8UhaVL_E",
  authDomain: "reactonlinestore-76fb2.firebaseapp.com",
  projectId: "reactonlinestore-76fb2",
  storageBucket: "reactonlinestore-76fb2.appspot.com",
  messagingSenderId: "956910908032",
  appId: "1:956910908032:web:b96f768726a5b11f1eac65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };

// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
