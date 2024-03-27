import { createAsyncThunk } from "@reduxjs/toolkit";


export const createNewWebPassword = createAsyncThunk(
  'passcode/webappstore.php',
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        'https://albinnew23.000webhostapp.com/api/passcode/webappstore.php',
        {
          method: 'POST',
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'userData/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        'http://albin23.infinityfreeapp.com/sql.php',
        {
          method: 'GET'
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);