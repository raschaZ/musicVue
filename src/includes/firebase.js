import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBU6tZR0-JKfp25zYjQmrfLMY20wlnbaps',
  authDomain: 'musicvue-c0f4e.firebaseapp.com',
  projectId: 'musicvue-c0f4e',
  storageBucket: 'musicvue-c0f4e.appspot.com',
  //   messagingSenderId: "581590517053",
  appId: '1:581590517053:web:7d93b9eae15585585fb154'
  //   measurementId: "G-1TMPRP9JEH"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const userCollection = db.collection('users');

export { auth, userCollection };