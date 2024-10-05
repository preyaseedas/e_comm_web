import React from "react";
import Top_header from "./Top_header";
import Navber from "./Navber";
import Carouselfun from "./Carouselfun";
import Sales from "./Sales";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="App">
        <Top_header />
      </div>
      <div>
        <Navber />
        <Carouselfun />
        <Sales />
        <Footer />
      </div>
    </div>
  );
}
