import React from "react";
import constant from "../../utils/constant";

function MainText() {
  return (
    <div className="m-4 flex flex-col   items-center gap-7 md:gap-3">
      <p className="font-poppins text-white text-xl md:text-3xl font-bold mt-12 ">
        Introducing Tarality: A Next Generation
      </p>
      <p className=" tracking-wide font-Prompt text-amber-500 text-3xl md:text-7xl md:p-14  font-extrabold py-5  animated-text">
        Crypto Banking Platform
      </p>
      <h1 className=" font-Edu text-sm md:text-xl md:mx-10  font-extralight text-white ">
        " Embark on a New Era of Crypto Banking with Tarality: Effortlessly
        Trade,
      </h1>
      <h1 className="font-Edu text-sm md:text-xl md:mx-8 font-extralight text-white ">
        Stake, and Grow Your Assets within a Cutting-Edge Platform "
      </h1>
      <img className=" mix-blend-screen" alt="" src={constant.INTRO_IMG} />
    </div>
  );
}

export default MainText;
