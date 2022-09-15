import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh7M69UAQNuhbx-854YxTThaHNsYTNaIg",
  authDomain: "seek-aid-35829.firebaseapp.com",
  databaseURL: "https://seek-aid-35829-default-rtdb.firebaseio.com",
  projectId: "seek-aid-35829",
  storageBucket: "seek-aid-35829.appspot.com",
  messagingSenderId: "524206447591",
  appId: "1:524206447591:web:fa2a13339059b9e01c7b42",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize database
const db = getFirestore(app);

export { db };
