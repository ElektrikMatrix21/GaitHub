import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAmqHxVBM878aOobypg-eT8qZ6mDmboHS4",
  authDomain: "wireleibrary-e574d.firebaseapp.com",
  databaseURL: "https://wireleibrary-e574d.firebaseio.com",
  projectId: "wireleibrary-e574d",
  storageBucket: "wireleibrary-e574d.appspot.com",
  messagingSenderId: "330943078487",
  appId: "1:330943078487:web:dd16c85c32141f391b0312"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
