import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        await Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Welcome to TODO APP.",
            timer: 1500,
            showConfirmButton: false
        });

        window.location.href = "home.html";

    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: error.message
        });

    }

});