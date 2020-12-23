import React from "react";
import Data from "./data.js";
import CardView from "./Carousel.jsx";

function creatSection(element) {
  return (
    <div className="container">
      <section id={element.title}>
        <div className="container">
          <h1>{element.title}</h1>
          <CardView
            key={element.key}
            id={"Controle" + element.title}
            data={element.data}
          />
        </div>
      </section>
    </div>
  );
}

function Sections() {
  return Data.map(creatSection);
}

export default Sections;
