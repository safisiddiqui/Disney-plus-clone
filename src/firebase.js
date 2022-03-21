import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBP0r8JWFKE87n-0XcajxT9SSEZcJdpeZg",
    authDomain: "disney-plus-clone-6f638.firebaseapp.com",
    projectId: "disney-plus-clone-6f638",
    storageBucket: "disney-plus-clone-6f638.appspot.com",
    messagingSenderId: "796101995695",
    appId: "1:796101995695:web:5f7ba209c724db5598f85a",
    measurementId: "G-YYEN29TKGX" }

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();
    
    export { auth, provider, storage };
    export default db;