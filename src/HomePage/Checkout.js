import React from "react";
import "./Checkout.css";
import Top_header from "./Top_header";
import Navber from "./Navber";

export default function Checkout() {
  return (
    <>
      {" "}
      <Top_header />
      <Navber />
      <h2>Billing Details</h2>
      <center>
        <div className="main_div">
          <div className="checkout_wrapper">
            <div className="checkout_div1">
              <div>
                {" "}
                <label>First Name*</label>
                <input type="text" />
              </div>
              <div>
                <label>Company Name*</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Street Address*</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Apartment,floor,etc.(optional)</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Town/City*</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone Number*</label>
                <input type="text" />
              </div>
              <div>
                <label>Email Address*</label>
                <input type="text" />
              </div>
              <div>
                <input id="check_box" type="checkbox" />
                Save this information for faster check-out next time
              </div>
            </div>
            <div className="place_order ">
              <div className="product">
                <img src="./g92-2-500x500 1.png"></img>
                <div>
                  <p>LCD Monitor</p>
                  <p>$650</p>
                </div>
              </div>
              <div className="product">
                <img src="./g27cq4-500x500 1.png"></img>
                <div>
                  <p>H1 Gamepad</p>
                  <p>$1100</p>
                </div>
              </div>
              <div className="shipping">
                <div className="product">
                  <p>Subtotal:</p>
                  <p>$1750</p>
                </div>
                <hr style={{ marginTop: "0px" }} />
                <div className="product">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="product">
                  <p>Total</p>
                  <p>$1750</p>
                </div>
              </div>
              <div className="bank">
                <div id="new">
                  <input type="radio" id="radio_button" name="pay_option" />
                  <label for="radio_button">Bank</label>
                </div>
                <div className="banktype">
                  <img src="./image 32.png"></img>
                  <img src="./image 30.png"></img>
                  <img src="./image 31.png"></img>
                  <img src="./image 33.png"></img>
                </div>
              </div>
              <div id="new">
                <input type="radio" id="radio_button" name="pay_option" />
                <label for="radio_button">Cash on delivery</label>
              </div>
              <div className="coupon_div ">
                <div id="tr3">
                  <input value="coupon code" id="coupon_code" />
                  <button id="apply_coupon" onClick={() => {}}>
                    Apply Coupon
                  </button>
                </div>{" "}
              </div>
              <button id="place_order_button"> Place Order</button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
