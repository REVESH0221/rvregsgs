import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDaui4MClRdLlvojGSqU5xh0uMbUbDFlxg",
  authDomain: "huhs-5adde.firebaseapp.com",
  projectId: "huhs-5adde",
  storageBucket: "huhs-5adde.appspot.com",
  messagingSenderId: "251106512031",
  appId: "1:251106512031:web:7a3bef181628bb7dda26aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();