import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = { 
  apiKey: "AIzaSyDNQ2moBxRLWPpKoqhI1kpv5NdfCvb4aGc",
  authDomain: "whatsapp-7531f.firebaseapp.com",
  databaseURL: "https://whatsapp-7531f-default-rtdb.firebaseio.com",
  projectId: "whatsapp-7531f",
  storageBucket: "whatsapp-7531f.appspot.com",
  messagingSenderId: "720604407667",
  appId: "1:720604407667:web:9b96e0e0f212e08f2f0706",
  measurementId: "G-J2DWXFMDSN"


  // apiKey: "AIzaSyBnfrbqObEkjcF7RItiPKJrSGFnb8UuwNU",
  // authDomain: "whatsapp-clone-9ee43.firebaseapp.com",
  // projectId: "whatsapp-clone-9ee43",
  // storageBucket: "whatsapp-clone-9ee43.appspot.com",
  // messagingSenderId: "151047061371",
  // appId: "1:151047061371:web:fa3f266d1d7dec502047de",
  // measurementId: "G-43PVV3Z81T",
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};

export default db;


