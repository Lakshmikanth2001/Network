import React from "react";
import NavBar from "./Navbar.jsx";
import Sections from "./Sections.jsx";

/*function creatSection(element) {
  return (
    <div className="container">
      <section id={element.title}>
        <div className="container">
          <h1>{element.title}</h1>
          <CardView id={"Controle" + element.title} data={element.data} />
        </div>
      </section>
    </div>
  );
}*/
// tested

export default function App() {
  return (
    <div>
      <NavBar />
      <Sections />
    </div>
  );
}
