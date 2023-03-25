import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp4Jld7QKTiVtknj5E1xyNnfc6Up4t0eA",
  authDomain: "consultations-dev.firebaseapp.com",
  projectId: "consultations-dev",
  storageBucket: "consultations-dev.appspot.com",
  messagingSenderId: "259302752341",
  appId: "1:259302752341:web:4bf5a9e8c811715768d4dc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
