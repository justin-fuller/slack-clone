import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE0xjE7jTfXrYhPJHmu08UBgo3O4YW6Aw",
  authDomain: "slack-clone-5cd38.firebaseapp.com",
  projectId: "slack-clone-5cd38",
  storageBucket: "slack-clone-5cd38.appspot.com",
  messagingSenderId: "162846358667",
  appId: "1:162846358667:web:79fee366afabb7d3de688e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
