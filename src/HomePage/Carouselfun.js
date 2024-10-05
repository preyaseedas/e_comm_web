import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carouselfun.css";
import Carouselimg from "./Carouselimg";
//import ExampleCarouselImage from "components/ExampleCarouselImage";

function Carouselfun() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "0px",
        }}
      >
        <div className="">
          {" "}
          <aside>
            <div className="">
              <select style={newstyle.s}>
                <option value="option1">Woman's Fashion</option>
                <option value="option2">kurti</option>
                <option value="option2">Top</option>
                <option value="option2">Churidar</option>
                <option value="option2">kurti</option>
              </select>{" "}
            </div>
            <br />
            <div>
              <select className="" style={newstyle.s}>
                <option value="option1">Man's Fashion</option>
                <option value="option2">Shirt</option>
                <option value="option2">Tshirt</option>
                <option value="option2">Trauser</option>
                <option value="option2">shorts</option>
              </select>
            </div>
            <br />
            <p style={newstyle.s}>
              <p>Electronics</p>
              <p>Home & Lifestyle</p>
              <p>Medicine</p>
              <p> Sports & Outdoor</p>

              <p> Baby's & Toys</p>
              <p> Groceries & static propTypes</p>
              <p> Health & Beauty</p>
            </p>{" "}
          </aside>
        </div>

        <div className="vertical_line"></div>

        <div>
          <Carousel
            className="slide_dote"
            activeIndex={index}
            style={{ marginLeft: "40px", overflow: "hidden" }}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              {" "}
              <Carouselimg />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./front_2.png"
                style={{ height: "344px", width: "892px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{}}>
              <img
                className="d-block w-100"
                src="./front_3.png"
                style={{ height: "344px", width: "892px" }}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

const newstyle = { s: { border: "0px", fontSize: " 15px" } };
export default Carouselfun;

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
