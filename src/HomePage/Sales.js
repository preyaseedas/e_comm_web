import React, { useState } from "react";
import "./Sales.css";
import { colors } from "@mui/material";

export default function Sales() {
  const [like, setLike] = useState({}); // Initialize with an empty object

  const watchlist_style = (id) => {
    setLike((prevLike) => ({
      ...prevLike,
      [id]: prevLike[id] === "red" ? "transparent" : "red", // Toggle between red and transparent
    }));
  };

  return (
    <>
      <center>
        <div className="flash_Sales">
          <p>
            <img src="./Rectangle 17.png" id="rectangle_img" alt="rectangle" />
            Today’s
          </p>
          <h1>Flash Sales</h1>
          <div className="sales_item">
            {[1, 2, 3, 4].map((itemId) => (
              <div className="wrapper" key={itemId}>
                <div className="sales_product">
                  <img
                    id={`img${itemId}`}
                    src={`./sales_${itemId}.png`}
                    alt={`Sales Item ${itemId}`}
                  />
                  <div className="watchlist_view">
                    <div className="watchlist_item">
                      <img
                        src="./Vector (2).png"
                        onClick={() => watchlist_style(itemId)} // Correct the onClick function
                        style={{
                          backgroundColor: like[itemId] || "transparent",
                        }}
                        alt="Watchlist Icon"
                      />{" "}
                    </div>
                    <div className="watchlist_item">
                      <img src="./Quick View.png" />{" "}
                    </div>{" "}
                  </div>
                </div>
                HAVIT HV-G92 Gamepad
                <p>$120 </p>
              </div>
            ))}
          </div>
        </div>
        <button id="view_product">view All Products</button>
        <hr />
        <div className="Category">
          <div className="style">
            <div>
              {" "}
              <p>
                <img src="./Rectangle 17.png" id="rectangle_img" />
                Category
              </p>
              <h1>Browse By Category</h1>
            </div>
          </div>
          <div className="Category_item">
            {[
              "CellPhone",
              "Computer",
              " SmartWatch",
              "Camera",
              "Headphone",
              "Gamepad",
            ].map((itemId) => (
              <div className="Category_img">
                <img src={`./Category-${itemId}.png`} />
                {itemId}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="flash_Sales1">
          <div className="style">
            <div>
              <p>
                <img src="./Rectangle 17.png" id="rectangle_img" />
                This Month
              </p>
              <h1>Best Selling Products</h1>
            </div>
            <button id="view_all">View All</button>
          </div>
          <div className="explore_flex2">
            {[6, 7, 8, 9].map((itemId) => (
              <div className="wrapper" key={itemId}>
                <div className="sales_product ">
                  <img
                    id={`img${itemId}`}
                    src={`./sales_${itemId}.png`}
                    alt={`Sales Item ${itemId}`}
                  />
                  <div className="watchlist_view">
                    <div className="watchlist_item">
                      {" "}
                      <img
                        src="./Vector (2).png"
                        style={{
                          backgroundColor: like[itemId] || "transparent",
                        }}
                        alt="Watchlist Icon"
                        onClick={() => watchlist_style(itemId)}
                      />
                    </div>
                    <div className="watchlist_item">
                      {" "}
                      <img src="./Quick View.png" />
                    </div>
                  </div>{" "}
                </div>{" "}
                HAVIT HV-G92 Gamepad
                <p>$120 $160</p>
              </div>
            ))}
          </div>{" "}
        </div>
        <div className="music">
          <div className="block">
            <p>Categories</p>
            <h1 style={{ marginTop: "20PX", fontSize: "51px" }}>
              Enhance Your Music Experience
            </h1>
            <div className="describtion_music">
              <div className="round">23 hours</div>
              <div className="round">05 days</div>
              <div className="round">23 hours</div>
              <div className="round">35 sec ond</div>
            </div>
            <button id="buy_button">Buy NOw</button>
          </div>
          <img id="BOOMBOX_size" src="./JBL_BOOMBOX.png" />
        </div>
        <div className="explore">
          <p>
            <img src="./Rectangle 17.png" id="rectangle_img" />
            Our Products
          </p>
          <h1>Explore Our Product</h1>
          <div className="explore_flex">
            <div className="wrapper">
              <div className="sales_product">
                <img id="img4" src="./1.png" />
                <div className="watchlist_view">
                  <div className="watchlist_item">
                    {" "}
                    <img
                      src="./Vector (2).png"
                      style={like}
                      onClick={watchlist_style}
                    />
                  </div>
                  <div className="watchlist_item">
                    {" "}
                    <img src="./Quick View.png" />
                  </div>
                </div>
              </div>
              Breed Dry Dog Food
              <p>$100</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img1" src="./2.png" />
                <div className="watchlist_view">
                  <div className="watchlist_item">
                    {" "}
                    <img
                      src="./Vector (2).png"
                      style={like}
                      onClick={watchlist_style}
                    />
                  </div>
                  <div className="watchlist_item">
                    <img src="./Quick View.png" />
                  </div>
                </div>
              </div>{" "}
              CANON EOS DSLR Camera
              <p>$360</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img5" src="./3.png" />
                <div className="watchlist_view">
                  <div className="watchlist_item">
                    {" "}
                    <img
                      src="./Vector (2).png"
                      style={like}
                      onClick={watchlist_style}
                    />
                  </div>
                  <div className="watchlist_item">
                    {" "}
                    <img src="./Quick View.png" />
                  </div>
                </div>
              </div>{" "}
              ASUS FHD Gaming Laptop
              <p>$700</p>
            </div>
            <div className="wrapper">
              <div className="sales_product">
                <img id="img1" src="./creame.png" />

                <div className="watchlist_view">
                  <div className="watchlist_item">
                    {" "}
                    <img
                      src="./Vector (2).png"
                      style={like}
                      onClick={watchlist_style}
                    />
                  </div>
                  <div className="watchlist_item">
                    {" "}
                    <img src="./Quick View.png" />
                  </div>
                </div>
              </div>
              Curology Product Set
              <p>500</p>
            </div>
          </div>
          <div className="explore_flex2">
            {[5, 6, 7, 8].map((itemId) => (
              <div className="wrapper" key={itemId}>
                <div className="sales_product">
                  <img id={`img${6}`} src={`./${itemId}.png`} />
                  <div className="watchlist_view">
                    <div className="watchlist_item">
                      {" "}
                      <img
                        src="./Vector (2).png"
                        style={{
                          backgroundColor: like[itemId] || "transparent",
                        }}
                        alt="Watchlist"
                        onClick={() => watchlist_style(itemId)}
                      />
                    </div>
                    <div className="watchlist_item">
                      <img src="./Quick View.png" />
                    </div>
                  </div>
                </div>
                Kids Electric Car
                <p>$960</p>
              </div>
            ))}
          </div>

          <center>
            <button id="view_product">View All Products</button>
          </center>
        </div>
        <div className="Arrival">
          {" "}
          <p>
            {" "}
            <img src="./Rectangle 17.png" id="rectangle_img" />
            Featured
          </p>
          <h1> New Arrival</h1>
          <div className="arrival_div">
            <div className="music_1">
              <img src="music_1.png" />
              <div className="show1">
                <h4> PlayStation 5</h4>
                <p> Black and white version of the PS5 coming out on sale.</p>
                <p>
                  <u> Shop Now</u>
                </p>
              </div>
            </div>

            <div>
              {" "}
              <div className="music_2">
                <img src="music_2.png" />{" "}
                <div className="show2">
                  <h4>Women’s Collections</h4>
                  <p> Featured woman collections that give you another vibe.</p>
                  <p>
                    <u> Shop Now</u>
                  </p>
                </div>
              </div>
              <div className="music_wrapper">
                <div className="music_3">
                  <img src="music_3.png" />{" "}
                  <div className="show3">
                    <h4>Speakers </h4>
                    <p> Amazon wireless speakers</p>
                    <p>
                      <u> Shop Now</u>
                    </p>
                  </div>
                </div>
                <div className="music_4">
                  <img src="music_4.png" />{" "}
                  <div className="show3">
                    <h4> Perfume</h4>
                    <p>GUCCI INTENSE OUD EDP </p>
                    <p>
                      <u> Shop Now</u>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service_wrapper">
          <div className="service1">
            {" "}
            <div className="text_class">
              <img className="icon" src="./icon-delivery.png" />
              <h4>FREE AND FAST DELIVERY</h4>{" "}
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="service2">
            <img className="icon" src="./Icon-Customer service.png" />
            <div className="text_class">
              {" "}
              <h4>24/7 CUSTOMER SERVICE</h4>{" "}
              <p>Friendly 24/7 customer support</p>{" "}
            </div>
          </div>
          <div className="service3">
            <img className="icon" src="./shield-tick.png" />
            <div className="text_class">
              {" "}
              <h4>MONEY BACK GUARANTEE</h4> <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
