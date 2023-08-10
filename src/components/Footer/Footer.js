import React from "react";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <div className="bg-[#333333] w-full md:h-[15rem] grid grid-cols-2 gap-5">
        <FooterLeft/>
        <FooterRight/>
      </div>
      <FooterBottom/>
    </>
  );
}

export default Footer;
