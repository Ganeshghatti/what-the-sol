import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const [scale, setscale] = useState({ scale: 1 });

  useEffect(() => {
    gsap.fromTo(
      ".hero-div-gradient",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };

  return (
    <section
      id="hero"
      className="w-full relative flex items-center md:flex-col"
    >
      <div className="hero-div">
        <div className="hero-div-gradient">
          <img
            src="/assets/herogradient.png"
            alt=""
            className="hero-div-gradient-img"
          />
          <p className="hero-div-gradient-text">
            WHAT
            <br /> THE SOL!!
          </p>
        </div>
        <img src="/assets/heroimg.png" alt="" className="hero-img-phone" />
        <div className="flex flex-col gap-2 hero-div-text">
          <p>What the Fxck!?</p>
          <p> Oh no, What the SOL!</p>
          <p>What the fuck is happening on SOLANA?</p>
        </div>
        <button className="hero-button">Buy Now</button>
      </div>
    </section>
  );
}
