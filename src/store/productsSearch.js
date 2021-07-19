import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import apiConfig from "../config/api";

export const productsSearch = createAsyncThunk(
  "productsSearch/productsSearch",
  async (search) => {
    console.log("entra");
    let response = await fetch(
      `${apiConfig.domain}/sites/${apiConfig.country}/search?q=${search}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.filters[0].values[0].id === "MCO1430") {
          console.log(data.results);
          return data.results;
        } else {
          console.log("no da");
          return [];
        }
      })
      .catch((err) => console.log(err, "error"));
    return response;
  }
);

let productsSearchSlice = createSlice({
  name: "productsSearch",
  initialState: {
    products: [],
    status: "",
  },
  reducers: {},
  extraReducers: {
    [productsSearch.pending]: (state) => {
      state.status = "loading";
    },
    [productsSearch.fulfilled]: (state, action) => {
      console.log(action.payload, "action.payload");
      state.products = action.payload;
      state.status = "success";
    },
    [productsSearch.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {} = productsSearchSlice.actions;

export default productsSearchSlice.reducer;
