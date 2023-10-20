// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9AaoxI-tncnW12e3aDgex-9NlCVUeRLc",
    authDomain: "phone-hub-bd.firebaseapp.com",
    projectId: "phone-hub-bd",
    storageBucket: "phone-hub-bd.appspot.com",
    messagingSenderId: "680875196259",
    appId: "1:680875196259:web:73c2e054570c3abe91dd56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app