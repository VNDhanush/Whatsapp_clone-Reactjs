import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCMueTEX0dYlg7GNYBJzi2rODI30YWmvLc",
  authDomain: "whatsapp-clone-2290a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-2290a.firebaseio.com",
  projectId: "whatsapp-clone-2290a",
  storageBucket: "whatsapp-clone-2290a.appspot.com",
  messagingSenderId: "409268775690",
  appId: "1:409268775690:web:2190fed275df69c932a8f3",
  measurementId: "G-61HCF36WYH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;