import { createSlice } from "@reduxjs/toolkit";
import constant from "../../utils/constant";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: constant.SIGNUP_MENU,
  },
  reducers: {
    changeMenu: (state, action) => {
       
      state.menu = action.payload;
    },
  },
});

export const { changeMenu } = menuSlice.actions;
export default menuSlice.reducer;
