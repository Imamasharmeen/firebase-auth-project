import React, { createContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

export const authContext = createContext({});
export default function MainLayout() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) => console.log(result));
  };
  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider).then((result) =>
      console.log(result)
    );
  };
  const handleFunction = {
    handleGithubLogin,
    handleGoogleLogin,
    handleTwitterLogin,
  };
  return (
    <div>
      <Navbar></Navbar>
      <authContext.Provider value={handleFunction}>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
}
