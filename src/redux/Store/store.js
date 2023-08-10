import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../Slices/NavbarSlice";
import menuSlices from "../Slices/MenuSlices";

const store = configureStore({
  reducer: {
    nav: navSlice,
    menu: menuSlices,
  },
});
export default store;
