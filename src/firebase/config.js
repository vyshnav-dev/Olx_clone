import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDJKDVDIooe6CnkctwldG26jGRJrE9LoJU",
    authDomain: "olx-clone-d6a22.firebaseapp.com",
    projectId: "olx-clone-d6a22",
    storageBucket: "olx-clone-d6a22.appspot.com",
    messagingSenderId: "1059251743819",
    appId: "1:1059251743819:web:3e866501691be8f77b31ce",
    measurementId: "G-KS44X0N07Q"
  };

 export default firebase.initializeApp(firebaseConfig)