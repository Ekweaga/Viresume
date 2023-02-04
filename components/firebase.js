// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRtYqObhw9ewXHUSDGxJ59K1VjUkxaw4",
  authDomain: "cars-9d7a4.firebaseapp.com",
  projectId: "cars-9d7a4",
  storageBucket: "cars-9d7a4.appspot.com",
  messagingSenderId: "788180347643",
  appId: "1:788180347643:web:92fa48ff82c5f41a0a1e5e",
  measurementId: "G-KWT6FJWJB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app}