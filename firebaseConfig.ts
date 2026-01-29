// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDHo6bkekUZO2IjFPv-kzDTFWqRs9F0YkA",
  authDomain: "disco-demo-381b1.firebaseapp.com",
  projectId: "disco-demo-381b1",
  storageBucket: "disco-demo-381b1.firebasestorage.app",
  messagingSenderId: "191295503752",
  appId: "1:191295503752:web:1df2cdb994ff8297de0e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
export { auth };
