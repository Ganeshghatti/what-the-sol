import React, { useState } from "react";

export default function Hero() {
  const [scale, setscale] = useState({ scale: 1 });

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
      <div className="hero-design"/>
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
        <img src="/assets/heroimg.png" alt="" className="hero-img-phone"/>
        <div className="flex flex-col gap-2 hero-div-text">
          <p>What the Fxck!?</p>
          <p> Oh no, What the SOL!</p>
          <p>What the fuck is happening on SOLANA?</p>
        </div>
        <button className="hero-button">Buy Now</button>
      </div>
      {/* <img src="/assets/scrollarrow.png" alt="" className="scroll-arrow"/>
      <div
        className="hero-left w-2/5 flex flex-col gap-4 justify-center md:w-11/12"
      >
        <p className="hero-left-heading">
          BLAST
          <br />
          <span className="hero-left-heading-yellow">PUNCH</span>
        </p>
        <p className="hero-left-description w-11/12">
          Right jab, uppercut, swift dodge, liver hook, and... KO! Enter the
          arena with $PUNCH, aiming to clinch the title as Blast's premier
          memecoin. Every move you make, every trade you take, puts you at the
          heart of the action.
        </p>
        <a href="https://app.thruster.finance/" onClick={scalehandleClick}>
          <button
            className="button-yellow-filled"
            style={{
              transform: `scale(${scale.scale})`,
              transition: "transform 0.3s ease",
            }}
          >
            Buy Now
          </button>
        </a>
      </div>
      <img
        src="./assets/Heroimg.png"
        className="md:w-full hero-img right-0 bottom-0 w-3/5 custom-height-88"
        alt="Punch"
      /> */}
    </section>
  );
}
