import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDIFnie_C7NqzBsGAIKO83dMsbQj9yOSQw",
    authDomain: "todo-app-88da5.firebaseapp.com",
    projectId: "todo-app-88da5",
    storageBucket: "todo-app-88da5.firebasestorage.app",
    messagingSenderId: "40246064913",
    appId: "1:40246064913:web:cf0f509ad27f65a82f3eb0",
    measurementId: "G-2PJE3SBYJ8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };