import React from "react";
import S3Description from "./SectionInfo.js/S3Description";
import constant from "../../utils/constant";

function SectionThree() {
  return (
    <div className=" max-w-[1480px] m-auto  grid grid-row-2 md:grid-cols-2 bg-[#20232a] ">
      <div className="overflow-hidden w-[530px] h-[600px] flex items-center  md:ml-12">
        <img
          className=" opacity-70 px-11 py-4 transition-all duration-300 ease-in-out hover:opacity-100 hover:shadow-lg hover:shadow-amber-500"
          alt="main"
          src={constant.INVEST_IMG}
        />
      </div>

      <S3Description />
    </div>
  );
}

export default SectionThree;
