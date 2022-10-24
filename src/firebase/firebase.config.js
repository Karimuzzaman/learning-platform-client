// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUF0t5DS0Lxv9x7Q_xJ0w-WViTGOluepE",
    authDomain: "programming-master-client.firebaseapp.com",
    projectId: "programming-master-client",
    storageBucket: "programming-master-client.appspot.com",
    messagingSenderId: "340262089856",
    appId: "1:340262089856:web:e6c4f3edd3d24b69102265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;