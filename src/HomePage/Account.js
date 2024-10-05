import React from "react";
import "./Account.css";
import { Height } from "@mui/icons-material";
import { height, width } from "@mui/system";

export default function Account() {
  return (
    <>
      <div className="my_account">
        <div>
          <div
            style={{
              marginTop: "323px",
              marginLeft: "135px",
              fontSize: "20px",
            }}
          >
            {" "}
            <b> Manage My Account</b>
          </div>

          <div className="manage_acc ">
            <p>My Profile</p>
            <p> Address Book</p>
            <p>My Payment Options</p>
          </div>
          <div
            style={{
              marginTop: "24px",
              marginLeft: "135px",
              fontSize: "20px",
            }}
          >
            {" "}
            <b> Manage My Account</b>
          </div>

          <div className="manage_acc ">
            <p>My Returns</p>
            <p> My Cancellations</p>
          </div>
          <div
            style={{
              marginTop: "24px",
              marginLeft: "135px",
              fontSize: "20px",
            }}
          >
            {" "}
            <b>My WishList</b>
          </div>
        </div>
        <div className=" profile">
          <div className="edit_profile"> Edit Your Profile</div>
          <div className="div_1">
            <div>
              <label>First Name</label>
              <input id="input_1" placeholder="Md" />
            </div>
            <div>
              <label>Last Name</label>
              <input id="input_1" placeholder="Rimel" />
            </div>
          </div>
          <div className="div_1">
            <div>
              <label>Email</label>
              <input id="input_1" placeholder="rimel1111" />
            </div>
            <div>
              {" "}
              <label>Address</label>
              <input id="input_1" placeholder="Kingston, 5236, United State" />
            </div>
          </div>
          <div className="div_2">
            {" "}
            Password Changes
            <input id="input_2" placeholder="Current Passwod" />
            <input id="input_2" placeholder="New Passwod" />
            <input id="input_2" placeholder="Confirm New Passwod" />
          </div>{" "}
          <div className="button_div">
            <button id="cancel" onclick={() => {}}>
              Cancel
            </button>

            <button id="save_changes" onclick={() => {}}>
              Save Changes
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
