import React from "react";
import Navber from "./Navber";
import Top_header from "./Top_header";

import "./Cart.css";
import { Navbar } from "react-bootstrap";

export default function Cart() {
  return (
    <>
      {" "}
      <Top_header />
      <Navber />
      <center>
        <div className="Cart_container ">
          <div className="table_div ">
            <div id="tr">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div id="tr2">
              <div id="new">
                <img src="./g92-2-500x500 1.png"></img>
                <p>LCD Monitor</p>
              </div>
              <p>$650</p>
              <input type="number" name="quantity" value="1" min="1" max="4" />
              <p>$650</p>
            </div>
            <div id="tr2">
              <div id="new">
                <img src="./g27cq4-500x500 1.png"></img>
                <p>H1 Gamepad</p>
              </div>
              <p>$550</p>
              <input
                type="number"
                name="quantity"
                value="1"
                min="01"
                max="03"
              />
              <p>$1100</p>
            </div>
            <div id="tr3">
              <button id="sop_cart_button">Return To Shop</button>
              <button id="sop_cart_button">Update Cart</button>
            </div>
          </div>
          <div>
            <div className="div-last">
              <div className="coupon_div ">
                <input value="coupon code" id="coupon_code" />
                <button id="apply_coupon" onClick={() => {}}>
                  Apply Coupon
                </button>
              </div>
              <div className="cart_total">
                <h3>Cart Total</h3>
                <div>
                  <p>Subtotal</p>
                  $1750
                </div>
                <hr />
                <div>
                  <p>Shipping</p>
                  Free
                </div>{" "}
                <hr />
                <div>
                  <p>Total</p>
                  $1750
                </div>
                <center>
                  {" "}
                  <button id="checkout">Process to checkout</button>
                </center>
              </div>
            </div>
          </div>{" "}
        </div>
      </center>
    </>
  );
}
