import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'netflix-clone-f4657.firebaseapp.com',
  projectId: 'netflix-clone-f4657',
  storageBucket: 'netflix-clone-f4657.appspot.com',
  messagingSenderId: '705549442570',
  appId: '1:705549442570:web:d4aee7d694356c197909f3',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
