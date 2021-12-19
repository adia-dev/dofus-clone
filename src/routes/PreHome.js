import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import intro from "../assets/intro.mp4";
import intro_loop from "../assets/intro_loop.mp4";
import BottomMenu from "../components/BottomMenu";
import UniverseSlider from "../components/sliders/UniverseSlider";

const PreHome = () => {
  return (
    <div className="ph-container">
      <BackgroundVideo introURL={intro} introLoopURL={intro_loop} />
      <BottomMenu />
      <UniverseSlider />
    </div>
  );
};

export default PreHome;
