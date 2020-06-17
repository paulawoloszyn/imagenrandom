import firebase from 'firebase/app'
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCINRPs4piWkrPBb9wkvjLzEyPqydGDVRw",
    authDomain: "mostrar-imagen.firebaseapp.com",
    databaseURL: "https://mostrar-imagen.firebaseio.com",
    projectId: "mostrar-imagen",
    storageBucket: "mostrar-imagen.appspot.com",
    messagingSenderId: "1034372344812",
    appId: "1:1034372344812:web:3ac7c13446c4d8ef8caec9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  
  export { db }