import React from "react";

function FooterBottom() {
  return (
    <div className="flex justify-center items-center flex-col py-9 bg-[#333333] w-full">
      <hr className="  bg-[#4e4e4e] h-[1px] w-full" />
      <div>
        <span className="text-slate-200">
          Copyright©2023. Created with love by{" "}
        </span>
        <span className="text-amber-700 font-semibold">TARALITY</span>
      </div>
    </div>
  );
}

export default FooterBottom;
