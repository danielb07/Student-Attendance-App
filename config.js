import firebase from 'firebase';

const db = {
  apiKey: "AIzaSyBCwi1Ji6-JtDlcTkoQWa6S2gT5bIhkdIU",
  authDomain: "student-s-attendance-app.firebaseapp.com",
  databaseURL: "https://student-s-attendance-app.firebaseio.com",
  projectId: "student-s-attendance-app",
  storageBucket: "student-s-attendance-app.appspot.com",
  messagingSenderId: "572986975255",
  appId: "1:572986975255:web:0ebce27250fe7a6031e852"
  };
  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(db);
}

export default firebase.database();
