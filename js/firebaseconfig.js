// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZHUq6JtY0Pseaj24Dj9FYKAz8l9RCBoU",
    authDomain: "blogging-99ae2.firebaseapp.com",
    databaseURL: "https://blogging-99ae2-default-rtdb.firebaseio.com",
    projectId: "blogging-99ae2",
    storageBucket: "blogging-99ae2.appspot.com",
    messagingSenderId: "206087411993",
    appId: "1:206087411993:web:395cd9965966512af40d88",
    measurementId: "G-73SFHLX667"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);