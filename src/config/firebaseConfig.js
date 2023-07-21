// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID,
  // measurementId:import.meta.env.VITE_MEASUREMENTID

  apiKey: "AIzaSyAQiwLDb6gZJ-XzydRQkk4LNuA2zH1bB8w",
  authDomain: "notesmanager-d41e5.firebaseapp.com",
  projectId: "notesmanager-d41e5",
  storageBucket: "notesmanager-d41e5.appspot.com",
  messagingSenderId: "339563283052",
  appId: "1:339563283052:web:fe982b9d11c527efd98e49",
  measurementId: "G-RRXVCC23WF"

};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleLogin = new GoogleAuthProvider(app)