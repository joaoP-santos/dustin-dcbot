// Import the functions you need from the SDKs you need
const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB9EcYadO0DTNbguuEpLfnftgG4LtywCPs",
  authDomain: "dustin-bot.firebaseapp.com",
  databaseURL: "https://dustin-bot-default-rtdb.firebaseio.com",
  projectId: "dustin-bot",
  storageBucket: "dustin-bot.appspot.com",
  messagingSenderId: "907181933354",
  appId: "1:907181933354:web:8aaa13cff324d98efb5453",
  measurementId: "G-3DB8P6MD6Y"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
module.exports = db