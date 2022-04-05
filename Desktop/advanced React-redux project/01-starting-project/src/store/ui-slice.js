import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isShowCart: false },
  reducers: {
    ToggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },
  },
});
export const ActionUiSlice = uiSlice.actions;
export default uiSlice;
