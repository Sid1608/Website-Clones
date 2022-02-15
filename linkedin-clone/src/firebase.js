import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAeOzFjD8m2--oSGjQ2sxJSh_RE0Ovakjw",
    authDomain: "linkedin-clone-67cc6.firebaseapp.com",
    projectId: "linkedin-clone-67cc6",
    storageBucket: "linkedin-clone-67cc6.appspot.com",
    messagingSenderId: "493874353658",
    appId: "1:493874353658:web:1a0ddae862c46261dd4043",
    measurementId: "G-P0YYMVW7M0"
  };
//connects to firebase database
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};