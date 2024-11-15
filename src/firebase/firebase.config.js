// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW1ZnSMXKPPAbLq9eeDXw8u_XvliQkYss",
  authDomain: "fir-auth-project-9fe29.firebaseapp.com",
  projectId: "fir-auth-project-9fe29",
  storageBucket: "fir-auth-project-9fe29.firebasestorage.app",
  messagingSenderId: "752297748040",
  appId: "1:752297748040:web:e29b69c1979e2adaddda7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;