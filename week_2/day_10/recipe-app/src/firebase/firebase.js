// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu93oNVMxmcETMz4dyKPG274U3kzTWKCg",
  authDomain: "recipe-app-e79e0.firebaseapp.com",
  projectId: "recipe-app-e79e0",
  storageBucket: "recipe-app-e79e0.appspot.com",
  messagingSenderId: "973589747",
  appId: "1:973589747:web:0f63d15038f24bff7c7b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { 
  db, 
  auth
};