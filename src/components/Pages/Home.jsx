import React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export default function Home() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => console.log(result));
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => console.log(result));
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-ghost border-2 border-gray-400 "
      >
        Google Login
      </button>

      <button
        onClick={handleGithubLogin}
        className="btn btn-ghost border-2 border-gray-400 "
      >
        Github Login
      </button>
    </div>
  );
}
