// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtnHxdpmXLnsjt_VckWDBT6oVs9Ye1cJA",
  authDomain: "otp-auth-1c3a5.firebaseapp.com",
  projectId: "otp-auth-1c3a5",
  storageBucket: "otp-auth-1c3a5.appspot.com",
  messagingSenderId: "405673678262",
  appId: "1:405673678262:web:61e7bf8acbfef8272a5d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;