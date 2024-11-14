// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHFmFKrwLswZa-Es2tnjy0c_R0GTFqFVo",
  authDomain: "auth-moha-milon-e7365.firebaseapp.com",
  projectId: "auth-moha-milon-e7365",
  storageBucket: "auth-moha-milon-e7365.firebasestorage.app",
  messagingSenderId: "774539328097",
  appId: "1:774539328097:web:93a598d74bb77a1c66c820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);