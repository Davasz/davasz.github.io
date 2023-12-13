// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, get, runTransaction  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCDU2LXDNtXXuDB30VeboPPyTRhvpyXIYQ",
    authDomain: "database-portfolio-e9e57.firebaseapp.com",
    projectId: "database-portfolio-e9e57",
    storageBucket: "database-portfolio-e9e57.appspot.com",
    messagingSenderId: "923433741323",
    appId: "1:923433741323:web:ec7bd74e4a3c4921b4ab0e",
    measurementId: "G-BSVTT055FM",
    databaseURL: "https://database-portfolio-e9e57-default-rtdb.firebaseio.com/",
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, get, runTransaction  }