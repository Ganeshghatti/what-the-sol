import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Tokenomics() {
  const [msg, setmsg] = useState("copy");

  const handleCopyToClipboard = () => {
    const textToCopy = "0x9aCbd03bE2852136680766F7B6Ba0074872396de";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setmsg("Text copied to clipboard");
      setTimeout(() => {
        setmsg("copy");
      }, 3000);
    });
  };
  return (
    <section
      id="Tokenomics"
      className="w-full h-auto flex flex-col items-center gap-4 relative"
    >
      <div className="flex flex-col gap-6 custom-width-88 md:w-11/12">
        <div className="flex justify-between items-center w-full gap-12">
          <p className="tokenomics-title">TOKENOMICS</p>
          <div className="flex-1 h-2 bg-black md:h-1" />
        </div>
        <div className="w-full flex md:flex-col md:gap-24">
          <div className="tokenomics-left">
            <p className="tokenomics-description w-11/12 md:w-full">
              Each token is a punch thrown in the fight for dominance, each
              investor a warrior in our corner.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Contract renounced
              </li>{" "}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Buy/Sell Tax 0%
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Liquidity Burnt
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                >
                  <rect
                    width="32"
                    height="34"
                    rx="16"
                    fill="url(#paint0_linear_165_748)"
                  />
                  <path
                    d="M6.66406 19.832L11.9974 25.4987L25.3307 11.332"
                    stroke="white"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_165_748"
                      x1="28.5"
                      y1="6"
                      x2="-9.25124e-07"
                      y2="24.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B00AFE" />
                      <stop offset="1" stop-color="#00FF85" />
                    </linearGradient>
                  </defs>
                </svg>
                Total Supply 1,000,000,000 $WTS
              </li>
            </ul>
            <button className="tokenomics-button">Contract Address</button>
          </div>
          <div className="tokenomics-right">
            <div className="flex justify-center gap-12">
              <div className="flex items-center gap-2 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#0094FF]" />
                Team
              </div>{" "}
              <div className="flex items-center gap-2 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#B00AFE]" />
                Marketing
              </div>{" "}
              <div className="flex items-center gap-2 tokenomics-right-piechart-text">
                <div className="w-4 h-4 bg-[#4DFFAA]" />
                Liquidity
              </div>
            </div>
            <img src="/assets/tokenomicsimg.png" alt=""/>
          </div>
        </div>
      </div>
      {/* <div className="flex w-4/5 md:w-11/12 md:flex-col justify-between md:gap-8 mt-8">
        <div className="tokenomics-piechart-div flex flex-col gap-4 custom-width-55 md:w-11/12">
          <img
            src="./assets/tokenomicsimg.png"
            alt=""
            className="w-3/5 md:w-full"
          />
        </div>
        <div className="flex flex-col custom-width-45 md:w-full tokenomics-right">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M8.60455 2.43759C17.7489 15.737 9.79958 14.7353 6.15458 15.8632C9.79208 20.8242 7.70652 25.486 1.98242 28.4058C6.9043 30.3825 13.4434 31.2607 5.92245 41.6908C13.3829 37.4698 18.5512 37.1139 17.8409 46.6736C23.2592 41.1897 30.3137 38.4262 37.346 43.0614C36.5436 36.1318 38.5328 33.0973 45.491 36.0864C38.0303 29.2417 41.1132 25.1774 45.5339 21.1961C37.894 20.8931 36.8226 15.0558 37.1037 8.07862C32.4928 13.0959 28.9946 12.5557 27.3535 2.73844C24.1842 9.94378 19.9159 14.5425 8.60445 2.4375L8.60455 2.43759ZM18.9524 12.6884C20.4618 12.7218 21.3491 13.832 22.2023 15.002L16.6238 24.6644C14.7093 24.8505 13.3135 24.2353 12.7063 22.4029L18.2854 12.7397C18.4569 12.7102 18.6304 12.6932 18.8045 12.6886C18.8538 12.6874 18.9031 12.6873 18.9524 12.6884ZM25.4246 13.7381C26.934 13.7711 27.8215 14.8819 28.6747 16.0515L22.4021 27.2107C20.4875 27.3967 19.0918 26.7807 18.4848 24.9487L24.7576 13.7897C24.9291 13.7601 25.1026 13.7429 25.2767 13.7381C25.3259 13.7369 25.3752 13.7369 25.4245 13.7379L25.4246 13.7381ZM30.9281 16.7428C32.4377 16.7763 33.325 17.8864 34.1784 19.0559L27.9961 30.0759C26.0814 30.2616 24.6858 29.6466 24.0789 27.8144L30.2608 16.7941C30.4325 16.7647 30.606 16.7477 30.7802 16.7431C30.83 16.7419 30.8795 16.7419 30.9283 16.7429L30.9281 16.7428ZM35.2727 21.9209C36.8451 21.9301 37.7801 23.0437 38.6809 24.2164L33.4724 33.2377C31.595 33.3592 30.2046 32.7345 29.555 30.9759L34.7637 21.9549C34.9323 21.9317 35.1024 21.9204 35.2726 21.921L35.2727 21.9209ZM11.9586 25.4737L21.8802 29.9287C22.1629 31.9622 21.6194 33.5651 19.8216 34.5141L9.8997 30.0588C9.47708 28.0321 10.6753 26.7321 11.9585 25.4737H11.9586Z"
                fill="#151515"
              />
            </svg>
            <p className="tokenomics-right-div-text">Contract renounced</p>
          </div>
          <div className="flex gap-2 items-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M8.60455 2.43759C17.7489 15.737 9.79958 14.7353 6.15458 15.8632C9.79208 20.8242 7.70652 25.486 1.98242 28.4058C6.9043 30.3825 13.4434 31.2607 5.92245 41.6908C13.3829 37.4698 18.5512 37.1139 17.8409 46.6736C23.2592 41.1897 30.3137 38.4262 37.346 43.0614C36.5436 36.1318 38.5328 33.0973 45.491 36.0864C38.0303 29.2417 41.1132 25.1774 45.5339 21.1961C37.894 20.8931 36.8226 15.0558 37.1037 8.07862C32.4928 13.0959 28.9946 12.5557 27.3535 2.73844C24.1842 9.94378 19.9159 14.5425 8.60445 2.4375L8.60455 2.43759ZM18.9524 12.6884C20.4618 12.7218 21.3491 13.832 22.2023 15.002L16.6238 24.6644C14.7093 24.8505 13.3135 24.2353 12.7063 22.4029L18.2854 12.7397C18.4569 12.7102 18.6304 12.6932 18.8045 12.6886C18.8538 12.6874 18.9031 12.6873 18.9524 12.6884ZM25.4246 13.7381C26.934 13.7711 27.8215 14.8819 28.6747 16.0515L22.4021 27.2107C20.4875 27.3967 19.0918 26.7807 18.4848 24.9487L24.7576 13.7897C24.9291 13.7601 25.1026 13.7429 25.2767 13.7381C25.3259 13.7369 25.3752 13.7369 25.4245 13.7379L25.4246 13.7381ZM30.9281 16.7428C32.4377 16.7763 33.325 17.8864 34.1784 19.0559L27.9961 30.0759C26.0814 30.2616 24.6858 29.6466 24.0789 27.8144L30.2608 16.7941C30.4325 16.7647 30.606 16.7477 30.7802 16.7431C30.83 16.7419 30.8795 16.7419 30.9283 16.7429L30.9281 16.7428ZM35.2727 21.9209C36.8451 21.9301 37.7801 23.0437 38.6809 24.2164L33.4724 33.2377C31.595 33.3592 30.2046 32.7345 29.555 30.9759L34.7637 21.9549C34.9323 21.9317 35.1024 21.9204 35.2726 21.921L35.2727 21.9209ZM11.9586 25.4737L21.8802 29.9287C22.1629 31.9622 21.6194 33.5651 19.8216 34.5141L9.8997 30.0588C9.47708 28.0321 10.6753 26.7321 11.9585 25.4737H11.9586Z"
                fill="#151515"
              />
            </svg>
            <p className="tokenomics-right-div-text">Buy/Sell Tax 0%</p>
          </div>
          <div className="flex gap-2 items-center  mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M8.60455 2.43759C17.7489 15.737 9.79958 14.7353 6.15458 15.8632C9.79208 20.8242 7.70652 25.486 1.98242 28.4058C6.9043 30.3825 13.4434 31.2607 5.92245 41.6908C13.3829 37.4698 18.5512 37.1139 17.8409 46.6736C23.2592 41.1897 30.3137 38.4262 37.346 43.0614C36.5436 36.1318 38.5328 33.0973 45.491 36.0864C38.0303 29.2417 41.1132 25.1774 45.5339 21.1961C37.894 20.8931 36.8226 15.0558 37.1037 8.07862C32.4928 13.0959 28.9946 12.5557 27.3535 2.73844C24.1842 9.94378 19.9159 14.5425 8.60445 2.4375L8.60455 2.43759ZM18.9524 12.6884C20.4618 12.7218 21.3491 13.832 22.2023 15.002L16.6238 24.6644C14.7093 24.8505 13.3135 24.2353 12.7063 22.4029L18.2854 12.7397C18.4569 12.7102 18.6304 12.6932 18.8045 12.6886C18.8538 12.6874 18.9031 12.6873 18.9524 12.6884ZM25.4246 13.7381C26.934 13.7711 27.8215 14.8819 28.6747 16.0515L22.4021 27.2107C20.4875 27.3967 19.0918 26.7807 18.4848 24.9487L24.7576 13.7897C24.9291 13.7601 25.1026 13.7429 25.2767 13.7381C25.3259 13.7369 25.3752 13.7369 25.4245 13.7379L25.4246 13.7381ZM30.9281 16.7428C32.4377 16.7763 33.325 17.8864 34.1784 19.0559L27.9961 30.0759C26.0814 30.2616 24.6858 29.6466 24.0789 27.8144L30.2608 16.7941C30.4325 16.7647 30.606 16.7477 30.7802 16.7431C30.83 16.7419 30.8795 16.7419 30.9283 16.7429L30.9281 16.7428ZM35.2727 21.9209C36.8451 21.9301 37.7801 23.0437 38.6809 24.2164L33.4724 33.2377C31.595 33.3592 30.2046 32.7345 29.555 30.9759L34.7637 21.9549C34.9323 21.9317 35.1024 21.9204 35.2726 21.921L35.2727 21.9209ZM11.9586 25.4737L21.8802 29.9287C22.1629 31.9622 21.6194 33.5651 19.8216 34.5141L9.8997 30.0588C9.47708 28.0321 10.6753 26.7321 11.9585 25.4737H11.9586Z"
                fill="#151515"
              />
            </svg>
            <p className="tokenomics-right-div-text">Liquidity Burnt</p>
          </div>
          <div className="flex gap-2 items-center  mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M8.60455 2.43759C17.7489 15.737 9.79958 14.7353 6.15458 15.8632C9.79208 20.8242 7.70652 25.486 1.98242 28.4058C6.9043 30.3825 13.4434 31.2607 5.92245 41.6908C13.3829 37.4698 18.5512 37.1139 17.8409 46.6736C23.2592 41.1897 30.3137 38.4262 37.346 43.0614C36.5436 36.1318 38.5328 33.0973 45.491 36.0864C38.0303 29.2417 41.1132 25.1774 45.5339 21.1961C37.894 20.8931 36.8226 15.0558 37.1037 8.07862C32.4928 13.0959 28.9946 12.5557 27.3535 2.73844C24.1842 9.94378 19.9159 14.5425 8.60445 2.4375L8.60455 2.43759ZM18.9524 12.6884C20.4618 12.7218 21.3491 13.832 22.2023 15.002L16.6238 24.6644C14.7093 24.8505 13.3135 24.2353 12.7063 22.4029L18.2854 12.7397C18.4569 12.7102 18.6304 12.6932 18.8045 12.6886C18.8538 12.6874 18.9031 12.6873 18.9524 12.6884ZM25.4246 13.7381C26.934 13.7711 27.8215 14.8819 28.6747 16.0515L22.4021 27.2107C20.4875 27.3967 19.0918 26.7807 18.4848 24.9487L24.7576 13.7897C24.9291 13.7601 25.1026 13.7429 25.2767 13.7381C25.3259 13.7369 25.3752 13.7369 25.4245 13.7379L25.4246 13.7381ZM30.9281 16.7428C32.4377 16.7763 33.325 17.8864 34.1784 19.0559L27.9961 30.0759C26.0814 30.2616 24.6858 29.6466 24.0789 27.8144L30.2608 16.7941C30.4325 16.7647 30.606 16.7477 30.7802 16.7431C30.83 16.7419 30.8795 16.7419 30.9283 16.7429L30.9281 16.7428ZM35.2727 21.9209C36.8451 21.9301 37.7801 23.0437 38.6809 24.2164L33.4724 33.2377C31.595 33.3592 30.2046 32.7345 29.555 30.9759L34.7637 21.9549C34.9323 21.9317 35.1024 21.9204 35.2726 21.921L35.2727 21.9209ZM11.9586 25.4737L21.8802 29.9287C22.1629 31.9622 21.6194 33.5651 19.8216 34.5141L9.8997 30.0588C9.47708 28.0321 10.6753 26.7321 11.9585 25.4737H11.9586Z"
                fill="#151515"
              />
            </svg>
            <p className="tokenomics-right-div-text">
              Total Supply
              <br /> 1,000,000,000 $PUNCH
            </p>
          </div>
          <Tooltip title={msg}>
            <img
              src="/assets/tokenomicscontactbutton.png"
              alt=""
              className="cursor-pointer"
              onClick={handleCopyToClipboard}
            />
          </Tooltip>
        </div>
      </div> */}
    </section>
  );
}
