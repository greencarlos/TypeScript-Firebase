import { useState, useEffect } from "react";
import type {  User } from "firebase/auth";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebaseConfig";
import Register from "./comps/Register";
import Login from "./comps/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>
        {user ? (
          <div>
            <h2>Welcone, {user.email}</h2>
            <Login />
          </div>
        ) : (
          <>
            <Register />
            <Login />
          </>
        )}
      </div>
    </>
  );
}

export default App;
