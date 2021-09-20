import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlw5ksmS_3lqF03VpvEOkQ6kTU-9VkhQk",
  authDomain: "vista-fa892.firebaseapp.com",
  projectId: "vista-fa892",
  databaseURL: "https://vista-fa892.firebaseio.com",
  storageBucket: "vista-fa892.appspot.com",
  messagingSenderId: "833086986181",
  appId: "1:833086986181:web:8d3bcec71f4c91a4feddac"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { storage, ref, uploadBytesResumable, getDownloadURL, db, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy };