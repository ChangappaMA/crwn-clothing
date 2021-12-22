import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDZDF7HPXEtouNnVR85XJ7PWsg7OWbehMw",
  authDomain: "crwn-db-d8d5f.firebaseapp.com",
  projectId: "crwn-db-d8d5f",
  storageBucket: "crwn-db-d8d5f.appspot.com",
  messagingSenderId: "326495876865",
  appId: "1:326495876865:web:6a11090b1d0f7ca4fd4d00",
  measurementId: "G-6NB3WT2DJR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;