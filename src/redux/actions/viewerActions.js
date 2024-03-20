
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const biodatas = createAsyncThunk(
  'api/mysql.php',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`https://albinnew23.000webhostapp.com/api/mysql.php`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);