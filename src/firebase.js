import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL1olpwd6tcoKiZke2HmZWaEu_0h8i2bk",
  authDomain: "todo-app-cp-2138f.firebaseapp.com",
  projectId: "todo-app-cp-2138f",
  storageBucket: "todo-app-cp-2138f.appspot.com",
  messagingSenderId: "871083214805",
  appId: "1:871083214805:web:8103fa3de3bf8ee2251f5c",
  measurementId: "G-PF8JCZ1XXL",
});

const db = firebaseApp.firestore();

export default db;
