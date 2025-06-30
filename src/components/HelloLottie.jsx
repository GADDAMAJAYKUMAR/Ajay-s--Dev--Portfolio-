// src/components/HelloLottie.jsx
import React from "react";
import Lottie from "lottie-react";
import helloJson from "../lotties/hello.json"; // make sure this path is correct

const HelloLottie = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={helloJson} loop={true} />
    </div>
  );
};

export default HelloLottie;
