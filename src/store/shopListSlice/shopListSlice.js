"use client";


import { createSlice } from "@reduxjs/toolkit";
import { thunkShopList } from "./thunks";

const initialState = {
  items: [],
  status: null,
  error: null,
};

const shopListSlice = createSlice({
  name: "shopList",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(thunkShopList.pending, (state) => {
        state.status = "pending";
      })
      .addCase(thunkShopList.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(thunkShopList.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      }),
});

export const shopListReducer = shopListSlice.reducer;
