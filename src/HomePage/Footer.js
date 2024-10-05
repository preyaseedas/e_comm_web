import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="sub_footer">
          <div style={{ height: "188px", width: "217px" }}>
            <big>exclusive</big> <br />
            subscribe
            <br />
            Get 10% OFF your 1st order
            <div>
              <input placeholder="Enter your email ${./icon-send.png}" />
            </div>{" "}
          </div>
          <div style={{ height: "180px", width: "175px" }}>
            Support 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            <br />
            exclusive@gmail.com
            <br />
            +88015-88888-9999
          </div>
          <div style={{ height: "236px", width: "123px" }}>
            Account My Account Login / Register Cart Wishlist Shop
          </div>
          <div style={{ height: "196px", width: "109px" }}>
            Quick Link Privacy Policy Terms Of Use FAQ Contact
          </div>
          <div style={{ height: "198px", width: "162px" }}>
            Quick Link Privacy Policy Terms Of Use FAQ Contact
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
