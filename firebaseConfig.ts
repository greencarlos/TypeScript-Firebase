// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import secretKeys from "./secretKeys";

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = secretKeys;

// todo: add sdks for firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
export { auth };
