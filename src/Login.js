import React from "react";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login bg-[#f8f8f8] h-screen w-full grid place-items-center">
      <div className="loginContainer p-24 text-center bg-white rounded-[10px] shadow-shadowBody">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          className="h-24 mb-10 object-contain mx-auto"
        />
        <div className="loginText">
          <h1 className="text-2xl font-medium">Sign in to WhatsApp</h1>
        </div>
        <button
          className="mt-12 !bg-[#0a8d48] text-white p-2 rounded-md"
          type="submit"
          onClick={signIn}>
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
