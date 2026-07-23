import { configureStore } from "@reduxjs/toolkit";
import hisobReducer from "./fueters/hisobSlice";
export const store = configureStore({
  reducer: {
    hisob: hisobReducer,
  },
});
