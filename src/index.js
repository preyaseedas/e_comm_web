import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./SignupPage/Signup";
import Cart from "./HomePage/Cart";
import Contact from "./Contact_page/Contact";
import About from "./About/About";
import Footer from "./HomePage/Footer";
import Account from "./HomePage/Account";
import Item from "./HomePage/Item";
import Gaming from "./HomePage/Gaming";
import Wish from "./HomePage/Wish";
import Error from "./HomePage/Error";
import { CheckOutlined } from "@mui/icons-material";
import Checkout from "./HomePage/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
