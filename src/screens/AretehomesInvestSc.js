import React, { useLayoutEffect } from "react";
import AretehomesInvest from "../components/invest/AretehomesInvest";
import Banner from "../components/invest/Banner";
import { revealAgain, revealOnce } from "../hooks/util";
import areteInto1 from "../components/Invest imgs/arete homes - intro1.jpeg";
import DownloadBtn from "../components/sky-high/DownloadBtn";

const AretehomesInvestSc = () => {
  useLayoutEffect(()=>{
    window.addEventListener("scroll", revealAgain);
    window.addEventListener("scroll", revealOnce);
    return()=>{
      window.removeEventListener("scroll", revealAgain);
      window.removeEventListener("scroll", revealOnce);
    }
  });

  return (
    <>
      {" "}
      <DownloadBtn title="ARETE HOMES INVESTMENT" images={areteInto1} Pdf="Investment Brochure.pdf" />
      <Banner />
      <AretehomesInvest />
    </>
  );
};

export default AretehomesInvestSc;
