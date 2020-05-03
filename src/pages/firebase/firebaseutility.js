import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAx0VLU8icNKHkP2LN8t6-dNU8hGcLTVQQ",
  authDomain: "todoapp-2f7d8.firebaseapp.com",
  databaseURL: "https://todoapp-2f7d8.firebaseio.com",
  projectId: "todoapp-2f7d8",
  storageBucket: "todoapp-2f7d8.appspot.com",
  messagingSenderId: "355643516000",
  appId: "1:355643516000:web:8bb557789ef3a5a5c38f05",
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provide = new firebase.auth.GoogleAuthProvider();
provide.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provide);
