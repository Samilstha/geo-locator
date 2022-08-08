import firebase from "firebase/app";

import "firebase/firebase-analytics";
import "firebase/firebase-database";
import "firebase/firebase-functions";

const firebaseConfig = {
  apiKey: "AIzaSyCbWYgHFylxbQtPTlmqsjEzVZJfzSq0dXg",
  authDomain: "geolocator-27665.firebaseapp.com",
  databaseURL: "https://geolocator-27665-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geolocator-27665",
  storageBucket: "geolocator-27665.appspot.com",
  messagingSenderId: "1020719693951",
  appId: "1:1020719693951:web:4b74299b1b15ee2cbdbf4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  firebaseConfig,
};

export const LoadAnalytics = () => {
  firebase.analytics();
};

export const db = firebase.database();
// Initialize Cloud Functions through Firebase
export const functions = firebase.functions();
