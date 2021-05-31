import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4-HI6gNKq13BxL9XpDsHoJgpxAy-Ovrc",
  authDomain: "linkedin-clone-cbcd7.firebaseapp.com",
  projectId: "linkedin-clone-cbcd7",
  storageBucket: "linkedin-clone-cbcd7.appspot.com",
  messagingSenderId: "1073891765121",
  appId: "1:1073891765121:web:8ff604e57150a9ea6e5680",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
