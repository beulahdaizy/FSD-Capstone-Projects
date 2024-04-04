import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNIKcpH3h5TudcNtXzksP4KJBZn7s3DYA",
  authDomain: "chat-8fac3.firebaseapp.com",
  projectId: "chat-8fac3",
  storageBucket: "chat-8fac3.appspot.com",
  messagingSenderId: "20583355406",
  appId: "1:20583355406:web:56d328d93d7b744691985f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export default app;
