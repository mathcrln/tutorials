import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username: string) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: firebase.firestore.DocumentSnapshot) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCN4Yq01q3SkQxd5koak7V0ku3bKUXr9cY",
//   authDomain: "nextfire-mathcrln.firebaseapp.com",
//   projectId: "nextfire-mathcrln",
//   storageBucket: "nextfire-mathcrln.appspot.com",
//   messagingSenderId: "577121791688",
//   appId: "1:577121791688:web:121aa305ce0b7ce54b3ffd",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// /**`
//  * Gets a users/{uid} document with username
//  * @param  {string} username
//  */
// export async function getUserWithUsername(username: string) {
//   const usersRef = firestore.collection("users");
//   const query = usersRef.where("username", "==", username).limit(1);
//   const userDoc = (await query.get()).docs[0];
//   return userDoc;
// }

// /**`
//  * Converts a firestore document to JSON
//  * @param  {DocumentSnapshot} doc
//  */
// export function postToJSON(doc: firebase.firestore.DocumentSnapshot) {
//   const data = doc.data();
//   console.log(doc.data());
//   return {
//     ...data,
//     // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
//     createdAt: data?.createdAt.toMillis(),
//     updatedAt: data?.updatedAt.toMillis(),
//   };
// }
