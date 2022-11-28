
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCw8i7VC2YnJsX7WBsjz7SpROxeirqg6I4",
  authDomain: "react-portfolio-muzammil.firebaseapp.com",
  projectId: "react-portfolio-muzammil",
  storageBucket: "react-portfolio-muzammil.appspot.com",
  messagingSenderId: "25025994342",
  appId: "1:25025994342:web:fd839663412d8dfa57d7a7"
};


export  const app = initializeApp(firebaseConfig);
export const db = getFirestore();