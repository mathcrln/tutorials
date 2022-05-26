import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN4Yq01q3SkQxd5koak7V0ku3bKUXr9cY",
  authDomain: "nextfire-mathcrln.firebaseapp.com",
  projectId: "nextfire-mathcrln",
  storageBucket: "nextfire-mathcrln.appspot.com",
  messagingSenderId: "577121791688",
  appId: "1:577121791688:web:121aa305ce0b7ce54b3ffd",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
