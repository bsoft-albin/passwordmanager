import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 30000, 
});

export const createNewWebPassword = createAsyncThunk(
    'passcode/webappstore.php',
  async (data,thunkAPI) => {
    try {
      const response = await axiosInstance.post('https://albinnew23.000webhostapp.com/api/passcode/webappstore.php', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)