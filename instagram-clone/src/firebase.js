import firebase from "firebase";

  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyD70Q5xlW6fAULDbDUIg6xCnMUjFKHNgk0",
    authDomain: "instagram-clone-5400b.firebaseapp.com",
    projectId: "instagram-clone-5400b",
    storageBucket: "instagram-clone-5400b.appspot.com",
    messagingSenderId: "983338783988",
    appId: "1:983338783988:web:fa05af8c0090c67595baa1",
    measurementId: "G-H9WH0VE1JB"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };
