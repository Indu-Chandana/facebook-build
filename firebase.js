import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBr2EKa1uunWg26_8-xXDHdJjMz_M-XGOQ",
    authDomain: "facebook-clone-indu.firebaseapp.com",
    projectId: "facebook-clone-indu",
    storageBucket: "facebook-clone-indu.appspot.com",
    messagingSenderId: "177058547216",
    appId: "1:177058547216:web:a87c38b2cb145f77a96c95"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };