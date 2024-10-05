import React from "react";
import "./Contact.css";
import Top_header from "../HomePage/Top_header";
import Navber from "../HomePage/Navber";
import Footer from "../HomePage/Footer";

export default function Contact() {
  return (
    <>
      <div>
        <Top_header />
        <Navber />
        <div className="main_div">
          <div className="Contact_block1">
            <div className="call">
              <h5>
                <img src="./icons-phone.png" /> Call To US
              </h5>
              <p>we are avaiable 24/7,7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div className="write">
              <h5>
                <img src="./icons-mail.png" /> Write To Us
              </h5>

              <p>
                {" "}
                Fill out our form and we will contuct you within 24 hours.{" "}
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p> Emails: Support@exclusive.com</p>
            </div>
          </div>
          <div className="Contact_block2">
            <div className="flex-container">
              <input value="your Name*" required />
              <input value="your Email*" required />
              <input value=" your Phone*" required />
            </div>
            <textarea>Your Massage</textarea>
            <button id="send_button" onClick={() => {}}>
              Send Massage
            </button>
          </div>{" "}
        </div>

        <Footer />
      </div>
    </>
  );
}
