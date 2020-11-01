import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.APP_APIKEY,
  authDomain: process.env.APP_AUTHDOMAIN,
  databaseURL: process.env.APP_DATABASEURL,
  projectId: process.env.APP_PROJECTID,
  storageBucket: process.env.APP_STORAGEBUCKET,
  messagingSenderId: process.env.APP_MESSAGINGSENDERID,
  appId: process.env.APP_APPID,
  measurementId: process.env.APP_MEASUREMENTID,
}

const initFirebase = firebase.initializeApp(firebaseConfig)
const db = initFirebase.firestore()

export default db
