import React from "react";

export default function Item() {
  return (
    <div className="item_1">
      <h1>Flash Sales</h1>
      <div className="item_1_pic" style={picback}>
        <img id=" image_style" src="./item_1.png"></img>
      </div>
    </div>
  );
}
const picback = {
  width: "270px",
  height: "250px",
  gap: "0px",
  borderRadius: "4px 0px 0px 0px",
  BackgroundColor: "background: rgba(245, 245, 245, 1)",
};
const image_style = {
  width: "172px",
  height: "152px",
  top: "14px",
  left: "9px",
};
