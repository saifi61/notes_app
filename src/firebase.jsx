import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA7ahzjd1jM_8FUPb4bEJHRLokqHYOF0FE",
  authDomain: "react-notes-c94b3.firebaseapp.com",
  projectId: "react-notes-c94b3",
  storageBucket: "react-notes-c94b3.appspot.com",
  messagingSenderId: "32340939350",
  appId: "1:32340939350:web:3c36726d6b74685999e1f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
