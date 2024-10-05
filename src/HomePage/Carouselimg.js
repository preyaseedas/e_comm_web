import React from "react";
import "./Carouselimg.css";
export default function Carouselimg() {
  return (
    <div className="carousel_div">
      <div className="block">
        <div className="new">
          <img src="./Apple.png" />
          <p id="size">iphone 14series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <p id="size">
          <u>iShop Now</u>
        </p>
      </div>
      <img src="./phone_img.png" />
    </div>
  );
}
