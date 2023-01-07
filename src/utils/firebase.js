import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBbA4TDA5t0KmYD8bD7O9SEEwTD_Nfi8ZQ",
    authDomain: "little-lonely.firebaseapp.com",
    projectId: "little-lonely",
    storageBucket: "little-lonely.appspot.com",
    messagingSenderId: "1043556367185",
    appId: "1:1043556367185:web:382f986d9410163a783170"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;