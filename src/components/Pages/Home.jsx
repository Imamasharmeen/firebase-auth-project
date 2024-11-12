import React, { useContext } from "react";
import { authContext } from "../../MainLayout/MainLayout";

export default function Home() {
  const contextValue = useContext(authContext);
  console.log(contextValue);
  const { handleGoogleLogin, handleGithubLogin, handleTwitterLogin,handleLogout } =
  contextValue;
  
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
      <button
        onClick={handleTwitterLogin}
        className="btn btn-ghost border-2 border-gray-400 "
      >
        Twitter Login
      </button> 
    </div>
  );
}
