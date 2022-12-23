import React, { useRef } from "react";

import Card from "../Card";
import Arrow from "../../images/svg/Arrow";

import "./styles.scss";

import CarouselInterface from "../../interfaces/CarouselInterface";

function Carousel({ data }: CarouselInterface) {
  const carousel = useRef<any>(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carousel}>
        {data.map(({ header, text, img }: any) => (
          <Card header={header} text={text} img={img} />
        ))}
      </div>
      <div className="arrow-button">
        <button onClick={handleLeftClick}>
          <Arrow direction="left" />
        </button>
        <button onClick={handleRightClick}>
          <Arrow direction="right" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
