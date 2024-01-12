import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBfPYKcaqm63NtohyHnejWlIOf5Le85b_8",
  authDomain: "fir-4e707.firebaseapp.com",
  projectId: "fir-4e707",
  storageBucket: "fir-4e707.appspot.com",
  messagingSenderId: "844924386045",
  appId: "1:844924386045:web:0565b920889810a592dc94",
  measurementId: "G-9X0N5B79EJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
