import React, { useState } from "react";
import "./Signup.css";

import Login from "./Login";
import Top_header from "../HomePage/Top_header";
import Navber from "../HomePage/Navber";
import Footer from "../HomePage/Footer";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Top_header />
      <Navber />
      <div className="login_in_page">
        <div className="content">
          <img id="side_img" src="./Side_image.png" />
        </div>
        {isLogin ? (
          <Login />
        ) : (
          <div style={style.signin_block}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <input type="text" placeholder="name" required />
            <input
              type="email"
              placeholder="email or ph no *"
              aria-required="true"
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              required
            />
            <button
              id="create_account_button"
              onClick={() => {
                setIsLogin(<Login />);
              }}
            >
              {" "}
              Create Account
            </button>{" "}
            <button id="google_button" onClick={() => {}}>
              <img
                style={{ margin: "0px 10px" }}
                src="./Icon-Google.png"
                alt="Google Icon"
              />
              Sign Up With Google
            </button>
            <p id="sty">
              Already have account?
              <u> Log in</u>
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
const style = {
  signin_block: {
    height: "530px",
    width: "371px",
  },
};
