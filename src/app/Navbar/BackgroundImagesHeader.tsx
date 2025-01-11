import React from "react";
import Image from "next/image";
import EllipseLeft from "../../../public/Ellipse 8.png";
import EllipseRight from "../../../public/Ellipse 7.png";
import bgWaves from "../../../public/Image.png";
import CubeRight from "../../../public/Cube4 - Transparent.png";
import Cubeleft from "../../../public/Cube8 - Transparent.png";

function BackgroundImagesHeader() {
  return (
    <div className="relative">
      <Image className="bg-fixed ellipse-left" src={EllipseLeft} alt="" />
      <Image className="bg-fixed ellipse-right" src={EllipseRight} alt="" />
      <Image className="bg-fixed absolute bgwaves" src={bgWaves} alt="" />
      <Image className="bg-fixed cube-left" src={Cubeleft} alt="" />
      <Image className="bg-fixed cube-right" src={CubeRight} alt="" />
    </div>
  );
}

export default BackgroundImagesHeader;
