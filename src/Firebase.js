// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwh-kxvGFMRSXziqxAvUS_Ec_Agi3Yvcs",
  authDomain: "movieflix-1f513.firebaseapp.com",
  projectId: "movieflix-1f513",
  storageBucket: "movieflix-1f513.appspot.com",
  messagingSenderId: "1080759357499",
  appId: "1:1080759357499:web:f05a8bb929a62d10ec8c1e",
  measurementId: "G-WNTQKR9QSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;
