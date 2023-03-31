import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDyFqBi2Zqq5kALGOJWxIeuwU5C_3nfw0",
    authDomain: "my-place-e4776.firebaseapp.com",
    projectId: "my-place-e4776",
    storageBucket: "my-place-e4776.appspot.com",
    messagingSenderId: "46398039053",
    appId: "1:46398039053:web:a9bc1123df69e0e71ee144"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }