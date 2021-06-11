import firebase from 'firebase'; 
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAvTejTm4NGMpxN3_I6uWezVhts4v_0UaU",
    authDomain: "answerapp-9bf16.firebaseapp.com",
    projectId: "answerapp-9bf16",
    storageBucket: "answerapp-9bf16.appspot.com",
    messagingSenderId: "463711109029",
    appId: "1:463711109029:web:9f1a4718d5a57768c5f24c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// if already initialized, use that one }
  export default firebase.firestore()