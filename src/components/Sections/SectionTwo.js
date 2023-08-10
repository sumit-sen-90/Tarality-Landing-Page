import React from "react";
import constant from "../../utils/constant";
import S2Description from "./SectionInfo.js/S2Description";

function SectionTwo() {
  return (
    <div className=" max-w-[1480px] m-auto  grid grid-row-2  md:grid-cols-2 ">
      <S2Description />
      <div className=" flex justify-center md:block">
        <img
          className="rounded-2xl m-9 md:h-[630px] h-[400px] "
          alt="main"
          src={constant.SECTION_ONE_IMG}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
