// components/HoverImage.js
import React from "react";

const HoverImage = ({ imageSrc, hoverText, size = "w-full h-full" }) => {
  return (
    <div className={`hover-image-container ${size}`}>
      <div className="hover-image">
        <img src={imageSrc} alt="hover" className="image" />
        <div className="text">{hoverText}</div>
      </div>
    </div>
  );
};

export default HoverImage;
