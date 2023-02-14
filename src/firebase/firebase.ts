// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBoc6f7CzrQTJ75KkXun-LTiZVw9RTLY5o",
    authDomain: "chat-app-2aa8f.firebaseapp.com",
    projectId: "chat-app-2aa8f",
    storageBucket: "chat-app-2aa8f.appspot.com",
    messagingSenderId: "331076456676",
    appId: "1:331076456676:web:f537efd8993e48ef191cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };