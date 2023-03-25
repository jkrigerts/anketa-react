import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.REACT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_PUBLIC_FIREBASE_APP_ID,
};
//New deployment

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
