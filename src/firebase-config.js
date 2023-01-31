import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeJQoOR7gSSLc8sH4fOVsC5K_4T9fgl6M",
  authDomain: "great-styling.firebaseapp.com",
  projectId: "great-styling",
  storageBucket: "great-styling.appspot.com",
  messagingSenderId: "157076670797",
  appId: "1:157076670797:web:57f3a93611ffa3b81acf04",
  measurementId: "G-MF7J9J3N0S",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
