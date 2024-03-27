
import { createSlice } from "@reduxjs/toolkit";
import { createNewWebPassword,fetchUserData } from '../actions/webkeysActions';


const newState = {
    error : null,
    passwords : null,
    isLoading : false,
    newSiteData : null
}

const webkeySlice = createSlice({
    name : 'hookwebkeySlice',
    initialState : newState,
    reducers : {
        clearwebkeySliceState : (state) =>{
            state.error = null;
            state.isLoading = false;
            state.passwords = null;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(createNewWebPassword.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(createNewWebPassword.fulfilled, (state, action) => {
          state.isLoading = false;
          state.passwords = action.payload;
        })
        .addCase(createNewWebPassword.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })

        .addCase(fetchUserData.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.newSiteData = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    }
})


export default webkeySlice.reducer