import React from "react";
import "./Error.css";
import Top_header from "./Top_header";
import Navber from "./Navber";
import Footer from "./Footer";

export default function Error() {
  return (
    <div>
      <Top_header />
      <Navber />
      <center>
        <div className="error_div">
          <h1> 404 Not Found</h1>
          <p>Your visited page not found. You may go home page</p>
        </div>
        <button id="backto_home">Back to home page</button>
      </center>
      <Footer />
    </div>
  );
}
