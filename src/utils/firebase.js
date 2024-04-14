// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUghXE-bVop-GYDeYL2LSqgGdt0I44ZRw",
  authDomain: "netflixgpt-44ba6.firebaseapp.com",
  projectId: "netflixgpt-44ba6",
  storageBucket: "netflixgpt-44ba6.appspot.com",
  messagingSenderId: "555937912745",
  appId: "1:555937912745:web:f9d23cd0c0a403dd90d6b8",
  measurementId: "G-8WRLSLNE63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(); 