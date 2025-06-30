// src/components/AnimatedSvg.jsx
import React from "react";

const AnimatedSvg = () => {
  return (
    <div className="animated-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="clip">
            <rect width="1600" height="1200" x="0" y="0" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip)">
          <g style={{ display: "none" }}>
            <rect width="1600" height="1200" fill="#ffffff" />
          </g>
          <g
            transform="matrix(0.9594,-0.2819,0.2819,0.9594,964.07,315.33)"
            opacity="1"
            style={{ display: "block" }}
          >
            <g opacity="1" transform="matrix(1,0,0,1,100.95,106.45)">
              <path
                fill="rgb(7,0,57)"
                fillOpacity="1"
                d="M100.7,41.6 C100.7,41.6 27.5,106.2 27.5,106.2 C27.5,106.2 -86.6,-23 -86.6,-23 C-95.3,-31.8 -100.7,-43.9 -100.7,-57.3 C-100.7,-84.3 -78.8,-106.2 -51.8,-106.2 C-36.6,-106.2 -23,-99.3 -14.1,-88.4"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSvg;
