'use client'

import { configureStore } from '@reduxjs/toolkit'
import { shopListReducer } from "./shopListSlice/shopListSlice";

export const store = configureStore({
  reducer: {
    shopList: shopListReducer,
  },
})