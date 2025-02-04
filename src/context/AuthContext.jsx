import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDeKcXpu_6V-LigTP7BKsuSiP1gAAx0Wyc',
  authDomain: 'assignment-8efbb.firebaseapp.com',
  projectId: 'assignment-8efbb',
  storageBucket: 'assignment-8efbb.firebasestorage.app',
  messagingSenderId: '192258669637',
  appId: '1:192258669637:web:d35ccea8d5582b80c3772c',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
