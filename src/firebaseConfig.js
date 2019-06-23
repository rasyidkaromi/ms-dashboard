import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "************",
    authDomain: "************",
    databaseURL: "************",
    projectId: "************",
    storageBucket: "************",
    messagingSenderId: "************",
    appId: "************"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebaseConfig;