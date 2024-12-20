import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSiOSBAyscC9DgtF0mGv-_TAy_gSEb6u0",
  authDomain: "full-stack-react-f9fad.firebaseapp.com",
  projectId: "full-stack-react-f9fad",
  storageBucket: "full-stack-react-f9fad.firebasestorage.app",
  messagingSenderId: "301814377927",
  appId: "1:301814377927:web:a30bdb16a8a29059503de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
