// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCd7vaf5LVoJxQvaH_1-FmvCiwfk9vOTyA",
  authDomain: "clone-350f1.firebaseapp.com",
  projectId: "clone-350f1",
  storageBucket: "clone-350f1.appspot.com",
  messagingSenderId: "672560285041",
  appId: "1:672560285041:web:f66cd6a9eb55ce8c2722d0",
  measurementId: "G-7W6TTZXCNV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
