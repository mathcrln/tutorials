import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase";

export default function useUserData() {
  const [user, setUser] = useAuthState(auth);
  const [username, setUsername] = useState("");

  useEffect(() => {
    let unsubscribe; // turn off realtime subscription

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername("");
    }
  }, [user]);

  return { user, username };
}
