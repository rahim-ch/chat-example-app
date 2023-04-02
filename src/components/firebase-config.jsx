import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDaX2p6ksxPgfdJT7gSsQW5iD95Yae0pD4",
    authDomain: "my-chat-app-dc09b.firebaseapp.com",
    databaseURL: "https://my-chat-app-dc09b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-chat-app-dc09b",
    storageBucket: "my-chat-app-dc09b.appspot.com",
    messagingSenderId: "684319613600",
    appId: "1:684319613600:web:1e061370fcd362f8aadfc5"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider,signInWithPopup}