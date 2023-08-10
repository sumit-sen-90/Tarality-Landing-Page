import React from "react";
import constant from "../utils/constant";

function SidebarMenu() {
  return (
    <div className="absolute z-10 p-3 bg-buttonHover w-full h-full md:hidden">
      <ul>
        <li className="text-white w-full text-center p-6 cursor-pointer hover:bg-slate-500 hover:text-slate-900">
          Home
        </li>
        <li className="text-white w-full text-center p-6 cursor-pointer hover:bg-slate-500 hover:text-slate-900">
          About
        </li>
        <li className="text-white w-full text-center p-6 cursor-pointer hover:bg-slate-500 hover:text-slate-900">
          Support
        </li>
        <li className="text-white w-full text-center p-6 cursor-pointer hover:bg-slate-500 hover:text-slate-900">
          Platform
        </li>
        <li className="text-white w-full text-center p-6 cursor-pointer hover:bg-slate-500 hover:text-slate-900">
          Pricing
        </li>
        <div className="flex flex-col my-8 gap-6">
          <button className="flex justify-center items-center gap-1 border border-yellow-500 rounded-lg hover:shadow-md py-4">
            <img
              className="h-6 mix-blend-screen rounded-full"
              alt="lock"
              src={constant.LOGIN_LOCK_ICON}
            />
            <span className="text-white">Login</span>
          </button>
          <button className="bg-amber-500 px-8 py-3 rounded-md text-slate-900 font-bold">
            Signup
          </button>
        </div>
      </ul>
    </div>
  );
}

export default SidebarMenu;
