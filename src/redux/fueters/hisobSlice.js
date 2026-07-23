import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hisob: [],
};
export const hisobSlice = createSlice({
  name: "hisob",
  initialState,
  reducers: {
    add: (state, action) => {
      state.hisob.push(action.payload);
    },
  },
});
export const { add } = hisobSlice.actions;
export default hisobSlice.reducer;
