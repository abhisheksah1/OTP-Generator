// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbXcFw6e8PQcKwpUsIHYrpnKf5rafjWB4",
  authDomain: "otp-send-ccfd5.firebaseapp.com",
  projectId: "otp-send-ccfd5",
  storageBucket: "otp-send-ccfd5.appspot.com",
  messagingSenderId: "433952258949",
  appId: "1:433952258949:web:e584d010c3286dee68a2ec",
  measurementId: "G-CN8YVD32WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

