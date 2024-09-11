// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA0y91UtDgjojHZsN9VHEeWIJIBo4Hmho",
  authDomain: "otp-demo-984dc.firebaseapp.com",
  projectId: "otp-demo-984dc",
  storageBucket: "otp-demo-984dc.appspot.com",
  messagingSenderId: "826774607117",
  appId: "1:826774607117:web:5e457fc4f6d35b80accc44"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };