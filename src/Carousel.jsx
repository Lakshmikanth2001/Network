import React from "react";
import Card from "./card.jsx";

// if their are N cards creat a 2D array of size {row:ceil(n/3),col:3};
// can be refactored
function CreatCard(element) {
  const { src, title, content } = element;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card src={src} title={title} content={content} buttonText="View" />
    </div>
  );
}
function ReturnCard(Card) {
  return Card; // hepler function just for map
}
function CardMatrix(data) {
  // creates a 2d array of size {row:ceil(n/3),col:3}; which condaits cards image links
  if (data.length % 3 === 0) {
    const n = data.length / 3;
    let G = [];
    for (let i = 0; i < n; i++) {
      G.push([]);
    }

    for (let i = 0, card_count = 0; i < n; i++) {
      for (let j = 0; j < 3; j++) {
        G[i].push(data[card_count]);
        card_count++;
        if (card_count >= data.length) {
          return G;
        }
      }
    }
    return G;
  } else {
    const n = Math.floor(data.length / 3) + 1;
    let G = [];
    for (let i = 0; i < n; i++) {
      G.push([]);
    }
    for (let i = 0, card_count = 0; i < n; i++) {
      for (let j = 0; j < 3; j++) {
        G[i].push(data[card_count]);
        card_count++;
        if (card_count >= data.length) {
          return G;
        }
      }
    }
    return G;
  }
}
function CreatMatrix(data) {
  const G = CardMatrix(data);
  let card_list = [];
  for (let i = 0; i < G.length; i++) {
    if (i === 0) {
      // active 3 cards (first 3 cards in data list)
      card_list.push(
        <div className="carousel-item active">
          <div className="row">{G[i].map(CreatCard)}</div>
        </div>
      );
      // G[i] consists 3 or less than 3 cards which will be rendered
    } else {
      card_list.push(
        <div className="carousel-item">
          <div className="row">{G[i].map(CreatCard)}</div>
        </div>
      );
    }
  }
  // carlist divided total number of cards into set with each set consisting og 3 element
  return card_list;
}

function CarouselControle_prev(id) {
  return (
    <a
      className="carousel-control-prev"
      href={"#" + id}
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
  );
}
function CarouselControle_next(id) {
  return (
    <a
      className="carousel-control-next"
      href={"#" + id}
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  );
}
// created 9 cards;

// as a carousel-item can hold  3 cards perfectly so we will place card in multiples of 3

function CardView(params) {
  // deconstruct the params object tommorow
  // data.js  and index.js should be more general
  //const { title, data } = params.data;
  // know not nessisary
  //console.log(data);
  //console.log(CardMatrix(params.data)); working fine
  const card_list = CreatMatrix(params.data);
  return (
    <div
      id={params.id}
      className="carousel slide"
      data-ride="false"
      data-interval="false"
    >
      <div className="carousel-inner">{card_list.map(ReturnCard)}</div>
      {CarouselControle_prev(params.id)}
      {CarouselControle_next(params.id)}
    </div>
  );
}

export default CardView;
