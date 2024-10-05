import React from "react";
import "./About.css";

import Carousel from "react-bootstrap/Carousel";
import Top_header from "../HomePage/Top_header";
import Navber from "../HomePage/Navber";

export default function About() {
  return (
    <>
      <div>
        {" "}
        <Top_header />
        <Navber />
        <div style={{ display: "flex", gap: "40px" }}>
          <div className="story">
            <div>
              {" "}
              <h1
                style={{
                  width: "277px",
                  height: " 64px",
                  gap: "0px",
                  fontSize: "45px",
                }}
              >
                Our Story
              </h1>
            </div>
            <div style={{ width: "525px", height: " 232px", fontSize: "17px" }}>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
              <br /> Exclusive has more than 1 Million products to offer,
              growing at a very fast. Exclusive offers a diverse assotment in
              categories ranging from consumer.
            </div>
          </div>
          <div>
            <img
              className="img"
              src="./portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
            ></img>
          </div>
        </div>
        <div className="contact_div ">
          <div className="type_contact">ff</div>
          <div className="type_contact">hh</div>
          <div className="type_contact"></div>
          <div className="type_contact"></div>
        </div>
        <div>
          {" "}
          <Carousel>
            <Carousel.Item>
              {" "}
              <div className="clint_div">
                <div style={style_div.style1}>
                  <img src="./clint_1.png" style={img_size.first} />
                  <br />
                  <div
                    style={{
                      height: "102px",
                      width: "185px",
                      marginTop: "30px",
                    }}
                  >
                    <h2>Tom Cruise</h2>
                    Founder & Chairman
                    <div>
                      <img src="" />
                      <img src="" />
                    </div>
                  </div>{" "}
                </div>{" "}
                <div style={style_div.style1}>
                  <img src="./clint_2.png" style={img_size.sec} />
                </div>
                <div style={style_div.style1}>
                  <img src="./clint_3.png" style={img_size.third} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item> 2nd page</Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
const style_div = {
  style1: {
    height: "430px",
    width: "370px",
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
};
const img_size = {
  first: {
    width: "236px",
    height: "391px",
    marginTop: "39px",
    marginLeft: "67px",
  },

  sec: {
    width: "294px",
    height: "397px",
    marginTop: "33px",
    marginLeft: "38px",
  },
  third: {
    width: "326px",
    height: "392px",
    marginTop: "38px",
    marginLeft: "22px",
  },
};
