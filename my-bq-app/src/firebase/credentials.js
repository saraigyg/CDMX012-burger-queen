// import function to initialize firebase app

import { initializeApp } from "firebase/app";

//add credentials

const firebaseConfig = {
    apiKey: "AIzaSyABFGQCnjCOrl8lLHRdkvmMp9Q-KI0Y9xo",
    authDomain: "burgerqueen-a42b3.firebaseapp.com",
    databaseURL: "https://burgerqueen-a42b3-default-rtdb.firebaseio.com",
    projectId: "burgerqueen-a42b3",
    storageBucket: "burgerqueen-a42b3.appspot.com",
    messagingSenderId: "371885641090",
    appId: "1:371885641090:web:cb8641d2cc462c53ae139b",
    measurementId: "G-EHVYYEWK7Z"
  };

//initialize app and save it in firebaseApp

const firebaseApp = initializeApp(firebaseConfig);

//export firebaseApp

export default firebaseApp;