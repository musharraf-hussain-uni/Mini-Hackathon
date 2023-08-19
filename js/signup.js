import {
    auth
} from "./firebaseconfig";

signupForm.addEventListener('click', () => {
    const signupForm = document.getElementById('signup-form').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const signupBtn = document.getElementById('SignUpBtn');
    const signupError = document.getElementById('signup-error').value;



    // Signup event listener
    signupBtn.addEventListener('click', () => {

        // Get input values
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var firstName = document.getElementById('first-name').value;
        auth.createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log("Signed up:", user);

                alert('User Created!', user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Sign up error:", error);

                alert(errorMessage);
                // ..
            });
    });

})