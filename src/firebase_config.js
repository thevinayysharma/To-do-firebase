import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCBT7Petk2FAtL2QcJ8pevCUZnIF1RsmpE",
  authDomain: "godoapp-41d9d.firebaseapp.com",
  projectId: "godoapp-41d9d",
  storageBucket: "godoapp-41d9d.appspot.com",
  messagingSenderId: "832817770465",
  appId: "1:832817770465:web:e174acfda81a03a887aca0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
