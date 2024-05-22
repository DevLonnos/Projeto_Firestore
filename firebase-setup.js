// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyAjV3qr8c1VhUdZt07VoYJMeot-coOWEOo",
    authDomain: "projeto-firestore-eff3b.firebaseapp.com",
    projectId: "projeto-firestore-eff3b",
    storageBucket: "projeto-firestore-eff3b.appspot.com",
    messagingSenderId: "552671408962",
    appId: "1:552671408962:web:c89026193add76ae2f8edb"
  };


// Inicializa o Firebase
window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);