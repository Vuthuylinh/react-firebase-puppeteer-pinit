import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU62a4nPxypuOqRnjEXiyVhhjOiUVsOrs",
  authDomain: "react-firebase-puppeteer-96b5d.firebaseapp.com",
  projectId: "react-firebase-puppeteer-96b5d",
  storageBucket: "react-firebase-puppeteer-96b5d.appspot.com",
  messagingSenderId: "844488792534",
  appId: "1:844488792534:web:2db8d4396333f1266b6c77"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
