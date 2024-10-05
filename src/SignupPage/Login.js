import React from "react";
import "./Signup.css";

export default function Login() {
  return (
    <>
      <div className="exclusive_login ">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <input value="Email or Phone Number" />
        <input value="password" />
        <div className="login_div">
          <button id="login_button" onClick={() => {}}>
            Log in
          </button>
          <p> Forget password?</p>
        </div>
      </div>
    </>
  );
}
