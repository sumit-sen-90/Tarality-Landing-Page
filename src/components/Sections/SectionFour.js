import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuImageTitleInfo } from "../../utils/helpers";
import constant from "../../utils/constant";
import { changeMenu } from "../../redux/Slices/MenuSlices";

function SectionFour() {
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menu.menu);

  const handleClick = (e) => {
    console.log("value", e.target.value);
    dispatch(changeMenu(e.target.value));
  };

  return (
    <div className=" max-w-[1480px] m-auto mt-36 ">
      <div className=" max-w-[1200px] m-auto flex justify-center flex-col items-center gap-2  p-5">
        <h1 className="tracking-wide font-Crimson text-white text-5xl font-extrabold p-4  animated-text">
          Unlock Limitless{" "}
          <span className="text-amber-800 ">
            Earning Potential with Tarality
          </span>
        </h1>
        <p className="font-sans text-white text-lg">
          Discover Limitless Crypto Rewards and Experiences - Embrace Tarality
          for Unparalleled Opportunities
        </p>
        <hr className="bg-slate-100 w-full h-1  mb-8 " />
        <ul className="flex justify-center items-center md:gap-3 text-white mb-5">
          <li
            className="md:p-8 md:mx-5 p-4  border-b rounded-l-lg bg-gradient-to-r from-amber-500 cursor-pointer hover:bg-amber-300"
            value={constant.SIGNUP_MENU}
            onClick={handleClick}
          >
            Signup
          </li>

          <li
            className="md:p-8 md:mx-5 p-2 cursor-pointer rounded-md  hover:bg-buttonHover"
            value={constant.KYC_MENU}
            onClick={handleClick}
          >
            KYC
          </li>
          <li
            className="md:p-8 md:mx-5 p-2 cursor-pointer rounded-md  hover:bg-buttonHover "
            value={constant.DEPOSITE_MENU}
            onClick={handleClick}
          >
            Deposite
          </li>
          <li
            className="md:p-8 md:mx-5 p-2 cursor-pointer rounded-md  hover:bg-buttonHover"
            value={constant.TRADE_MENU}
            onClick={handleClick}
          >
            Trade
          </li>
          <li
            className="md:p-8 md:mx-5 p-2 cursor-pointer rounded-md  hover:bg-buttonHover"
            value={constant.CRYPTO_MENU}
            onClick={handleClick}
          >
            Crypto{" "}
          </li>
          <li
            className="md:p-8 md:mx-5 p-2 cursor-pointer rounded-md  hover:bg-buttonHover"
            value={constant.GOLD_MENU}
            onClick={handleClick}
          >
            Gold{" "}
          </li>
          <li
            className="md:p-8 md:mx-5 p-4 cursor-pointer rounded-md  border-b rounded-r-lg bg-gradient-to-l from-amber-500  hover:bg-amber-300 "
            value={constant.WALLET_MENU}
            onClick={handleClick}
          >
            Wallet
          </li>
        </ul>
        <div className="bg-buttonHover rounded-2xl qd:w-[75rem] md:h-[27rem] h-[40rem]   grid md:grid-cols-2 md:grid-rows-2 py-12 ">
          <img
            className={
              menu === constant.SIGNUP_MENU ||
              constant.DEPOSITE_MENU ||
              constant.CRYPTO_MENU ||
              constant.WALLET_MENU
                ? "md:px-12 md:ml-8 px-8 "
                : ""
            }
            alt=""
            src={menuImageTitleInfo(menu)?.[0]}
          />

          <div className="flex flex-col justify-center items-center md:block">
            <h1 className="text-white text-4xl md:py-3 md:p-5 p-2  font-Prompt ">
              {menuImageTitleInfo(menu)?.[1]}
            </h1>
            <p className="text-white md:pr-4 m-5">
              {menuImageTitleInfo(menu)?.[2]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
