import React, { useState } from "react";
import "./Gaming.css";
import "./Sales.css";
import { colors } from "@mui/material";
import Top_header from "./Top_header";
import Navber from "./Navber";

export default function Gaming() {
  const [size, setSize] = useState("");

  return (
    <>
      {" "}
      <Top_header />
      <Navber />
      <div className="final">
        <div className="game_block">
          <img className="block_div" src="./game_4.png"></img>
          <img className="block_div" src="./game_3.png"></img>
          <img className="block_div" src="./game_2.png"></img>
          <img className="block_div" src="./game_1.png"></img>
        </div>
        <div className="gameplayer">
          <img src="./game_bigpic.png" />
        </div>
        <div className="product_details">
          <h2>Havic HV G-92 Gamepad</h2>
          <div className="star">
            *** (150 Reviews) |<p> In Stock</p>
          </div>
          <h4>$192.00</h4>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className="choose_color">
            <label for="color">
              <h5>Colours:</h5>
            </label>
            <input name="option" id="color1" type="radio" />
            <input name="option" id="color2" type="radio" checked />
          </div>
          <div className="size">
            <h5>Size:</h5>
            <div
              className="sizebox"
              value="size"
              onClick={() => {
                setSize({ backgroundColor: "red", colors: "white" });
              }}
            >
              XS
            </div>
            <div className="sizebox">S</div>
            <div className="sizebox">M</div>
            <div className="sizebox">L</div>
            <div className="sizebox">XL</div>
          </div>
          <div className="new_div">
            <div className="product_add">
              <button id="minas_button">-</button>
              <div className="count">2</div>
              <button id="minas_button">+</button>
            </div>
            <button id="buy_now">Buy Now</button>
            <div className="love">
              <img style={{ padding: "4px" }} src="./wishlist.png"></img>
            </div>
          </div>
          <div className="service">
            <div className="delivery">
              <img src="./icon-delivery (1).png"></img>
              <div>
                <h6>Free Delivery</h6>
                <p>
                  <u>Enter your postal code for Delivery Availability</u>
                </p>
              </div>
            </div>

            <div className="return_delivery">
              <img src="./Icon-return.png"></img>
              <div>
                {" "}
                <h6>Return Delivery</h6>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <center>
        <div className="flash_gaming">
          <p>
            <img src="./Rectangle 17.png" id="rectangle_img" />
            Related Item
          </p>

          <div className="explore_flex2">
            <div className="wrapper">
              <div className="sales_product">
                <img id="img1" src="./sales_1.png" />
                <div className="watchlist_view">
                  <img id="watchlist_item" src="./Wishlist.png" />
                  <img id="watchlist_item" src="./Quick View.png" />
                </div>
              </div>{" "}
              Kids Electric Car
              <p>$960</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img2" src="./item_2.png" />
                <div className="watchlist_view">
                  <img id="watchlist_item" src="./Wishlist.png" />
                  <img id="watchlist_item" src="./Quick View.png" />
                </div>
              </div>
              Jr. Zoom Soccer Cleats
              <p>$1160</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img3" src="./sales_3.png" />
                <div className="watchlist_view">
                  <img id="watchlist_item" src="./Wishlist.png" />
                  <img id="watchlist_item" src="./Quick View.png" />
                </div>
              </div>{" "}
              GP11 Shooter USB Gamepad
              <p>$660</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img7" src="./gammaxx.png" />
                <div className="watchlist_view">
                  <img id="watchlist_item" src="./Wishlist.png" />
                  <img id="watchlist_item" src="./Quick View.png" />
                </div>
              </div>
              Quilted Satin Jacket
              <p>$660</p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
