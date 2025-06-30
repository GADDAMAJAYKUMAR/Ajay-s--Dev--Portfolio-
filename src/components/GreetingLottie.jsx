// src/components/GreetingLottie.jsx
import React from "react";
import Lottie from "lottie-react";
import greetingHand from "../lotties/greeting-hand.json";

export default function GreetingLottie() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <Lottie animationData={greetingHand} loop={true} />
    </div>
  );
}
