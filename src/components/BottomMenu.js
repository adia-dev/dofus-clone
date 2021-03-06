import React from "react";

import logo from "../assets/logo.png";

const BottomMenu = () => {
  return (
    <div className="bm-container">
      <img class="bm-container__logo" src={logo} alt="Logo dofus" />

      <div className="bm-container__links">
        <a href="#univers" className="bm-container__link">
          <h1>Univers</h1>
          <div className="bm-container__link__bottom"></div>
        </a>
        <div className="bm-container__link">
          <h1>Médias</h1>
          <div className="bm-container__link__bottom"></div>
        </div>
        <div className="bm-container__link">
          <h1>Classes</h1>
          <div className="bm-container__link__bottom"></div>
        </div>
      </div>

      <div className="bm-container__play-btn">
        <span>Jouer</span>
        Gratuitement
      </div>

      <div className="bm-container__links">
        <div className="bm-container__link">
          <h1>Communauté</h1>
          <div className="bm-container__link__bottom"></div>
        </div>
        <div className="bm-container__link">
          <h1>Forum</h1>
          <div className="bm-container__link__bottom"></div>
        </div>
        <div className="bm-container__link">
          <h1>Économie</h1>
          <div className="bm-container__link__bottom"></div>
        </div>
      </div>

      <div className="bm-help">
        <svg
          height="36"
          role="img"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="comment"
          class=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BottomMenu;
