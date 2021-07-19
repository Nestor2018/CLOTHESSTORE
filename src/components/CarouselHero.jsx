import React from "react";

import "../styles/components/CarouselHero.scss";
import ArrowNext from "../assets/icons/arrow-next.svg";
import ArrowBack from "../assets/icons/arrow-back.svg";

const CarouselHero = () => {
  return (
    <>
      <div className="CarouselHero">
        <div>
          <img src={ArrowBack} />
        </div>
        <div>
          <img src={ArrowNext} />
        </div>
      </div>
    </>
  );
};

export default CarouselHero;
