
import  userSlice  from './slicers/viewerSlice';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    userDataAPI : userSlice,
  // Add other reducers here if needed
});

export default rootReducer;