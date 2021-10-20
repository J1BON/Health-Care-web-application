import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(userCredential.user);
        setError("");
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(userCredential.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const GoogleProvider = new GoogleAuthProvider();

  const SignInUsingGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [error]);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    setUser,
    setError,
    SignInUsingGoogle,
    handleRegistration,
    handleSignIn,
    handleEmail,
    handlePassword,
    logOut,
  };
};

export default useFirebase;
