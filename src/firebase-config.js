import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
	authDomain: "restoplus-c2.firebaseapp.com",
	projectId: "restoplus-c2",
	storageBucket: "restoplus-c2.appspot.com",
	messagingSenderId: "122162040428",
	appId: "1:122162040428:web:53273cd0124de18b959249",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
