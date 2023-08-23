// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAg91MuxYZkeL2h7B5ksZI5Yl0HlZ_AL6Q',
  authDomain: 'todolist-33893.firebaseapp.com',
  projectId: 'todolist-33893',
  storageBucket: 'todolist-33893.appspot.com',
  messagingSenderId: '359500414753',
  appId: '1:359500414753:web:971e531887135c3c94c860'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
