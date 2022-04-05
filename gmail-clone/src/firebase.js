import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGSUkMClD5A0bY6Ec99waA1rX3czBSEu0",
    authDomain: "clone-fd1af.firebaseapp.com",
    projectId: "clone-fd1af",
    storageBucket: "clone-fd1af.appspot.com",
    messagingSenderId: "500884210282",
    appId: "1:500884210282:web:71826dff2fdc3e797e4013",
    measurementId: "G-WN9CFP7GSG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //firestore is real time database
  const db=firebase.firestore();
  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

export{db,auth,provider};