import React from "react";

function Card(props) {
  // run a server in another port so <a> attribute can give a get request to that server and return html and css
  return (
    <div
      className="card shadow p-3 mb-5 bg-white rounded "
      style={{ width: "18rem" }}
    >
      <img src={props.src} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <button className="btn btn-primary">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
