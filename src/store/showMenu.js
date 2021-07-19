import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    show: false,
  },
  reducers: {
    changeShowMenu: (state, action) => {
      state.show = !state.show;
    },
  },
});

export const { changeShowMenu } = menuSlice.actions;

export default menuSlice.reducer;
