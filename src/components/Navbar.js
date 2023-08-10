import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/Slices/NavbarSlice";
import constant from "../utils/constant";
import SidebarMenu from "./SidebarMenu";

function Navbar() {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="w-full h-[80px] bg-[#202329] ">
        <div className=" sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1380px]   m-auto h-full  w-full flex justify-between items-center shadow-sm">
          <img
            className=" h-12 rounded-full shadow-md"
            alt="logo"
            src={constant.TARALITY_LOGO}
          />

          <div className="hidden  md:flex ">
            <button className="flex items-center bg-transparent justify-between px-6 gap-2">
              <img
                className="h-6 rounded-full"
                alt="lock"
                src={constant.LOGIN_LOCK_ICON}
              />
              <span className="text-white font-semibold">Login</span>
            </button>
            <button className="bg-amber-500 px-4 py-2 rounded-3xl text-white font-semibold hover:bg-buttonHover">
              Signup
            </button>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            <img
              alt=""
              className="h-8 mr-2 mix-blend-screen"
              src={isMenuOpen ? constant.HAMBERG_ICON : constant.CROSS_ICON}
            />
          </div>
        </div>
      </div>
      {!isMenuOpen && <SidebarMenu />}
    </>
  );
}

export default Navbar;
