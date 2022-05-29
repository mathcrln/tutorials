import firebase from "firebase/app";

export interface Post {
  id: string;
  username: string;
  content: string;
  title: string;
  heartCount: number;
  published: string;
  slug: string;
  updatedAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
}
