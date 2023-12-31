// import { auth } from "./firebaseconfig";

// const signupForm = document.getElementById("signup-form");
// const firstNameInput = document.getElementById("first-name");
// const lastNameInput = document.getElementById("last-name");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const confirmPasswordInput = document.getElementById("confirm-password");
// const signupBtn = document.getElementById("SignUpBtn");
// const signupError = document.getElementById("signup-error"); // Assuming you have an element with this ID

// // Signup event listener
// signupBtn.addEventListener("click", () => {
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   console.log(email, password);

//   // Check if passwords match
//   if (password !== confirmPasswordInput.value) {
//     alert("Passwords do not match");
//     return;
//   }

//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       const user = userCredential.user;
//       console.log("Signed up:", user);
//       alert("User Created!");
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Sign up error:", errorCode, errorMessage);
//       alert(errorMessage);
//       // ..
//     });
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZHUq6JtY0Pseaj24Dj9FYKAz8l9RCBoU",
  authDomain: "blogging-99ae2.firebaseapp.com",
  databaseURL: "https://blogging-99ae2-default-rtdb.firebaseio.com",
  projectId: "blogging-99ae2",
  storageBucket: "blogging-99ae2.appspot.com",
  messagingSenderId: "206087411993",
  appId: "1:206087411993:web:395cd9965966512af40d88",
  measurementId: "G-73SFHLX667",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

// const signupForm = document.getElementById("signup-form");
// const firstNameInput = document.getElementById("first-name");
// const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const signupBtn = document.getElementById("SignUpBtn");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const obj = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  console.log(obj);

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, obj.email, obj.confirmPassword)
    .then((userCredentials) => {
      alert("signup sucessfully");
    })
    .catch((error) => {
      alert(`There is an ${error}`);
    });
});
