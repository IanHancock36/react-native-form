
import { initializeApp } from "firebase/app";   
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAVPfliC9XsKLtK_G7ia48pG5lrmOyVCZM",
  authDomain: "react-native-form-6271c.firebaseapp.com",
  projectId: "react-native-form-6271c",
  storageBucket: "react-native-form-6271c.appspot.com",
  messagingSenderId: "505232511545",
  appId: "1:505232511545:web:9d7a47407c7911a94733e8",
};



// Initialize Firebase

const app = initializeApp(firebaseConfig);    

//Initialize database
export const db = getDatabase(app);







