import React from "react";

import ButtonInterface from "../../interfaces/ButtonInterface";

import "./styles.scss";

function Button({ text, variant }: ButtonInterface) {
  return (
    <button className={`button ${variant}`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.081"
          height="10"
          viewBox="0 0 13.081 10"
        >
          <path
            id="np_arrow_1920781_000000"
            d="M2.79,19.386l4.035,4.035a.964.964,0,0,0,1.363-1.363L5.8,19.662h8.812a.964.964,0,0,0,0-1.928H5.8l2.382-2.382A.969.969,0,1,0,6.81,13.989l-4.02,4.02A.981.981,0,0,0,2.5,18.7a.925.925,0,0,0,.289.688Z"
            transform="translate(15.581 23.7) rotate(180)"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="button__text">{text}</div>
    </button>
  );
}

export default Button;
