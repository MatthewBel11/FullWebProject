// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQhuiUMLW0PFr2hyuDwhQ0GlrkYVlpc38',
  authDomain: 'fullwebtest-a57c7.firebaseapp.com',
  projectId: 'fullwebtest-a57c7',
  storageBucket: 'fullwebtest-a57c7.appspot.com',
  messagingSenderId: '884767927675',
  appId: '1:884767927675:web:98b3e4aa0ea3e4ba0461de',
  measurementId: 'G-1YQNK75RR5'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
export default db
