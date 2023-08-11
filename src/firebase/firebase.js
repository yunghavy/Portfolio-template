import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNaeUb4QfTwsIpIjukhjhQiEzKmesG1GY",
  authDomain: "yunghavy-48ad6.firebaseapp.com",
  projectId: "yunghavy-48ad6",
  storageBucket: "yunghavy-48ad6.appspot.com",
  messagingSenderId: "864594713605",
  appId: "1:864594713605:web:f5633bad72cbfdcb34506c",
  measurementId: "G-9S0MXWQHBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);