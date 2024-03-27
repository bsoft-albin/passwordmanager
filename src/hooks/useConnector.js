import { createAsyncThunk } from '@reduxjs/toolkit';


const usePostApiConnector = (key = '', url = '') => {
    const makeApiCall = createAsyncThunk(
      key,
      async (postData, thunkAPI) => {
        try {
          const response = await fetch(
            url,
            {
              method: 'POST',
              body: JSON.stringify(postData)
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
  
    return makeApiCall;
  };
  


  const useGetApiConnector = (key = '', url = '') => {
    const makeApiCall = createAsyncThunk(
      key,
      async (postData, thunkAPI) => {
        try {
          const response = await fetch(
            url,
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
  
    return makeApiCall;
  };
  
  export { useGetApiConnector, usePostApiConnector }