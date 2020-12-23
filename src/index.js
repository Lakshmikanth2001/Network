import React from "react";
import ReactDOM from "react-dom";
//import Data from "./data.js";

import App from "./App";

/*Data.forEach((element) => {
  var root = document.getElementById(element.title);
  ReactDOM.render(
    <App
      title={element.title}
      id={"Controle" + element.title}
      data={element}
    />,
    root
  );
});*/

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

/*const Home = document.getElementById("Home");
ReactDOM.render(<App title="Home" id="ControleHome" data={Data[0]} />, Home);

const Features = document.getElementById("Features");
ReactDOM.render(
  <App title="Features" id="ControleFeatures" data={Data[1]} />,
  Features
);

const Pricing = document.getElementById("Pricing");
ReactDOM.render(
  <App title="Pricing" id="ControlePricing" data={Data[2]} />,
  Pricing
);*/
// above code was hard coded
