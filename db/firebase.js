import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, setDoc, doc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "ex-pharm-89f35.firebaseapp.com",
  databaseURL: "https://ex-pharm-89f35.firebaseio.com",
  projectId: "ex-pharm-89f35",
  storageBucket: "ex-pharm-89f35.appspot.com",
  messagingSenderId: "508008907680",
  appId: "1:508008907680:web:04218026f6f34057e55ac5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}