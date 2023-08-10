import React from "react";
import constant from "../../utils/constant";

function FooterLeft() {
  return (
    <div className="flex flex-col justify-center items-start ml-20">
      <img
        className="mix-blend-screen h-16 md:h-24 "
        alt=""
        src={constant.TARALITY_FOOTER_LOGO}
      />
      <ul className="flex gap-3 justify-center items-center">
        <li className="hover:bg-amber-100 rounded-full hover:shadow-md hover:shadow-amber-300 p-1 bg-[#515050] ">
          <img
            className="h-10 mix-blend-darken "
            alt=""
            src={constant.FB_IMG}
          />
        </li>
        <li className="hover:bg-amber-100 rounded-full hover:shadow-md hover:shadow-amber-300  bg-[#515050]">
          <img
            className="h-12 mix-blend-darken "
            alt=""
            src={constant.INST_IMG}
          />
        </li>
        <li className="hover:bg-amber-100 rounded-full hover:shadow-md hover:shadow-amber-300  bg-[#515050]">
          <img
            className="h-12 w-12 mix-blend-darken "
            alt=""
            src={constant.TWITTER_IMG}
          />
        </li>
        <li className="hover:bg-amber-100 rounded-full hover:shadow-md hover:shadow-amber-300  bg-[#515050]">
          <img
            className="h-14 mix-blend-darken "
            alt=""
            src={constant.LINKDIN_IMG}
          />
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row gap-5 mt-4">
        <li className="text-slate-200 hover:shadow-lg cursor-pointer  ">
          About Us
        </li>
        <li className="text-slate-200 hover:shadow-lg cursor-pointer  ">F&Q</li>
        <li className="text-slate-200 hover:shadow-lg cursor-pointer  ">
          Tarality Coin
        </li>
        <li className="text-slate-200 hover:shadow-lg cursor-pointer  ">
          Privacy policy
        </li>
        <li className="text-slate-200 hover:shadow-lg cursor-pointer  ">
          Terms & conditions
        </li>
      </ul>
    </div>
  );
}

export default FooterLeft;
