import React from "react";

export default function HowToBuy() {
  return (
    <section id="HowToBuy" className="flex flex-col items-center">
      <div className="custom-width-88 md:w-11/12 flex flex-col gap-6">
        <div className="flex justify-between items-center w-full gap-12 md:gap-6">
          <p className="HowToBuy-title">HOW TO BUY</p>
          <div className="flex-1 h-2 bg-black md:h-1" />
        </div>
        {/* <p className="HowToBuy-description w-1/2 md:w-11/12">
          Each token is a punch thrown in the fight for dominance, each investor
          a warrior in our corner.
        </p>{" "} */}
        <div className="w-full flex md:flex-col md:items-center justify-between mt-32 md:gap-28">
          <div className="HowToBuy-card1 HowToBuy-card">
            <img src="/assets/HowtoBuycard1.png" alt="" />
            <a href="https://app.thruster.finance/">
              Open https://
              <br />
              app.thruster.fina
              <br />
              nce/
            </a>
          </div>
          <div className="HowToBuy-card2 HowToBuy-card">
            {" "}
            <img src="/assets/HowtoBuycard2.png" alt="" />
            Connect your EVM wallet
          </div>
          <div className="HowToBuy-card3 HowToBuy-card">
            {" "}
            <img src="/assets/HowtoBuycard3.png" alt="" />
            Click the Swap button
          </div>
        </div>
      </div>
    </section>
  );
}
