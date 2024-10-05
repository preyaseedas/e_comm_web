import React from "react";
import "./Navber.css";

export default function Navber() {
  return (
    <>
      <div className="d-flex justify-content-between" style={style.nav}>
        <div>
          <strong>
            <big>Exclusive </big>
          </strong>
        </div>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "Black" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/Contact"
                style={{ color: "Black" }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About" style={{ color: "Black" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup" style={{ color: "Black" }}>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <div>
            <div className="search ">
              <input type="search" placeholder="what are you looking for?" />
              <button type="submit">
                <img id="search_button" src="./searchbutton.png" />
              </button>
            </div>
            <button id="nav_button">
              <img src="./wishlist.png" />
            </button>
            <button id="nav_button">
              <img src="./addcart.png" />
            </button>
          </div>
        </div>
      </div>{" "}
      <hr />
    </>
  );
}
const style = {
  nav: {
    height: "38px",
    width: "1170px",
    marginTop: "50px",
    marginLeft: "135px",
    color: "Black",
    fontSize: "20px",
  },
};
