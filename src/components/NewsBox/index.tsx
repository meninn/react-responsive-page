import React from "react";

import Line from "../../images/svg/Line";

import NewsBoxInterface from "../../interfaces/NewsBoxInterface";

import "./styles.scss";

function NewsBox({ text, tagText, variant, date, img }: NewsBoxInterface) {
  return (
    <div className="news-container">
      <Line />
      <div className={`tag ${variant}`}>{tagText}</div>
      <p>{text}</p>
      <div className="date">{date}</div>
      {img ? <img src={img} alt="" /> : ""}
    </div>
  );
}

export default NewsBox;
