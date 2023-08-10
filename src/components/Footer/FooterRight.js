import React from "react";
import constant from "../../utils/constant";

function FooterRight() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ml-14">
      <img
        className="mix-blend-darken md:h-28 h-20"
        alt=""
        src={constant.LION_IMG}
      />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center ">
        <h1 className="text-slate-200 font-Prompt text-2xl">PRODUCT</h1>
        <p className="text-xl line">⭐</p>
        <p className="text-slate-200 font-poppins text-2xl">MAKE IN INDIA</p>
      </div>
    </div>
  );
}

export default FooterRight;
