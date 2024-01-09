// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const fireBaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
	apiKey: fireBaseApiKey,
	authDomain: "coding-shields-client-site.firebaseapp.com",
	projectId: "coding-shields-client-site",
	storageBucket: "coding-shields-client-site.appspot.com",
	messagingSenderId: "985445258108",
	appId: "1:985445258108:web:d3382ee339f986e0c10af9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
