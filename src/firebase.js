import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8FT_EDeGXwBC-OPA1Rv4wst06zOTzkWw",
    authDomain: "mail-client-92b9d.firebaseapp.com",
    databaseURL: "https://mail-client-92b9d-default-rtdb.firebaseio.com",
    projectId: "mail-client-92b9d",
    storageBucket: "mail-client-92b9d.appspot.com",
    messagingSenderId: "519073726947",
    appId: "1:519073726947:web:dc69fb9dd413f9737c20d6",
    measurementId: "G-07WQZ5QFGJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();

  export { auth };
  export { db };