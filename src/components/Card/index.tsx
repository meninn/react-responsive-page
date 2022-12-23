import React from "react";

import CardInterface from "../../interfaces/CardInterface";

import "./styles.scss";

function Card({ header, text, img }: CardInterface) {
  return (
    <div className="card">
      <div>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
      <img src={img} />
    </div>
  );
}

export default Card;
