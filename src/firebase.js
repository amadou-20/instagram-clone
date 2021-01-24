import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAu3zxrMqb97E0REkiaXy8397N4ZLKh3Uw",
    authDomain: "instagram-clone-bc1ce.firebaseapp.com",
    projectId: "instagram-clone-bc1ce",
    storageBucket: "instagram-clone-bc1ce.appspot.com",
    messagingSenderId: "351580986501",
    appId: "1:351580986501:web:538d01e3d13efe35c11dec",
    measurementId: "G-ZGKJT9RJ0T"
 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();


 export { auth, db, storage };


 // export default db

