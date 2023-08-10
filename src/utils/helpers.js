import constant from "./constant";

export const menuImageTitleInfo = (menu) => {
  const menuImageMap = {
    [constant.SIGNUP_MENU]: [
      constant.SIGNUP_IMG,
      constant.SIGNUP_TITLE,
      constant.SIGNUP_info,
    ],
    [constant.CRYPTO_MENU]: [
      constant.CRYPTO_IMG,
      constant.CRYPTO_TITLE,
      constant.CRYPTO_info,
    ],
    [constant.TRADE_MENU]: [
      constant.TRADE_IMG,
      constant.TRADE_TITLE,
      constant.TRADE_info,
    ],
    [constant.DEPOSITE_MENU]: [
      constant.DEPOSITE_IMG,
      constant.DEPOSITE_TITLE,
      constant.DEPOSITE_info,
    ],
    [constant.WALLET_MENU]: [
      constant.WALLET_IMG,
      constant.WALLET_TITLE,
      constant.WALLET_info,
    ],
    [constant.GOLD_MENU]: [
      constant.GOLD_IMG,
      constant.GOLD_TITLE,
      constant.GOLD_info,
    ],
    [constant.KYC_MENU]: [
      constant.KYC_IMG,
      constant.KYC_TITLE,
      constant.KYC_info,
    ],
  };
  return menuImageMap[menu];
};
