import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLNo5PWgNJ2pkHAKYTylS3qFtdoHLiOfc",
  authDomain: "miniiblog-fcd5c.firebaseapp.com",
  projectId: "miniiblog-fcd5c",
  storageBucket: "miniiblog-fcd5c.appspot.com",
  messagingSenderId: "485226660408",
  appId: "1:485226660408:web:052e7c9a5a6d70fe0ddccd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };