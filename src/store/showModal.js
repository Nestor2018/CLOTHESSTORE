import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },
  reducers: {
    changeShow: (state, action) => {
      state.show = !state.show;
    },
  },
});

export const { changeShow } = modalSlice.actions;

export default modalSlice.reducer;
