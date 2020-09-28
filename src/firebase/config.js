 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBm-ZHxNn3aqVQNtun8MNuNXRVzn1gt-qU",
    authDomain: "viv-mini-insta.firebaseapp.com",
    databaseURL: "https://viv-mini-insta.firebaseio.com",
    projectId: "viv-mini-insta",
    storageBucket: "viv-mini-insta.appspot.com",
    messagingSenderId: "238469599396",
    appId: "1:238469599396:web:e25415c8c1cb3355ddd631"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const pictureStorage = firebase.storage();
  const pictureFireStore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { pictureStorage, pictureFireStore, timeStamp };
