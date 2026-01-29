// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const apiKey = import.meta.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const projectId = process.env.PROJECT_ID
const storageBucket = process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGE
const appId = process.env.APP_ID

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
