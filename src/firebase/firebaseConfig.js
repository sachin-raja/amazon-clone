import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDle-jLGHkpgI28nmAS9aNu2Sq0PD11OUo",
    authDomain: "c-96f9c.firebaseapp.com",
    databaseURL: "https://c-96f9c.firebaseio.com",
    projectId: "c-96f9c",
    storageBucket: "c-96f9c.appspot.com",
    messagingSenderId: "365111030261",
    appId: "1:365111030261:web:31a5a9dd08ffa633bb70bc",
    measurementId: "G-0H12NSJW2H"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }