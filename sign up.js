import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await updateProfile(userCredential.user, {
            displayName: username
        });

        await Swal.fire({
            icon: "success",
            title: "Sign Up Successful!",
            text: "Your account has been created.",
            timer: 1500,
            showConfirmButton: false
        });

        window.location.href = "index.html";

    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: error.message
        });

    }

});