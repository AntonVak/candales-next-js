"use client"
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/components/api";


export const thunkShopList = createAsyncThunk('shopList/fetchShopList', async () => {
    try {
        const response = await API.fetchShopList(); // Ваш запрос данных с сервера
        console.log('Data received:', response); // Вывести данные в консоль
        return response;
      } catch (error) {
        console.error('Error fetching data:', error); // Вывести ошибку в консоль
        throw error; // Перебросить ошибку, чтобы ее обработать в .rejected
      }
    
  });
//   const response = await API.fetchShopList();
//     console.log(response)
//      // Ваш запрос данных с сервера
//     return response;