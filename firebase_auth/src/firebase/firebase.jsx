// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN3OnWEVrYDwbJn6LnhCU_O9S04yNoXTA",
  authDomain: "sample-firebase-ai-app-3f519.firebaseapp.com",
  projectId: "sample-firebase-ai-app-3f519",
  storageBucket: "sample-firebase-ai-app-3f519.firebasestorage.app",
  messagingSenderId: "1081347541474",
  appId: "1:1081347541474:web:dbe6e0c51aa9147560d1bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}