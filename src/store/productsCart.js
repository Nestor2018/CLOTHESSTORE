import { createSlice } from "@reduxjs/toolkit";

const productsCartSlice = createSlice({
  name: "productsCart",
  initialState: {
    productsCart: [],
    items: 0,
  },
  reducers: {
    add: (state, action) => {
      state.productsCart.push(action.payload);
    },
    remove: (state, action) => {
      for (var i = 0; i < state.productsCart.length; i++) {
        if (state.productsCart[i].id == action.payload) {
          state.productsCart.splice(i, 1);
          return;
        }
      }
    },
    deleteState: (state, action) => {
      state.productsCart = state.productsCart.filter(function (i) {
        return i.id !== action.payload;
      });
    },
    numberItems: (state, action) => {
      state.items = Object.keys(action.payload).length;
    },
  },
});

export const {
  add,
  remove,
  deleteState,
  numberItems,
} = productsCartSlice.actions;

export default productsCartSlice.reducer;
