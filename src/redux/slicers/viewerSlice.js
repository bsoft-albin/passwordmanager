
import { createSlice } from '@reduxjs/toolkit';
import { biodatas } from '../actions/viewerActions'

const userSlice = createSlice({
  name: 'userDataAPI',
  initialState: {
    userData: [],
    loading: false,
    // error: null,
    // fnState : () =>{
    //   alert("Working!!")
    // }
  },
  reducers: {
    fnCheckmethod : () =>{
      alert("Hello bro")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(biodatas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(biodatas.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(biodatas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;