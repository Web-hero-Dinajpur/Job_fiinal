import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UserSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const UsersignOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsuscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state already adegest', currentUser);
            setLoading(false);
        })
        return () => {
            unsuscriber();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        UserSignIn,
        googleSignIn,
        UsersignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;