
import  userSlice  from './slicers/viewerSlice';
import { combineReducers } from '@reduxjs/toolkit';
import webkeyslice from './slicers/webkeyslice';


const rootReducer = combineReducers({
    userDataAPI : userSlice,
    usersWebKeys : webkeyslice,
  // Add other reducers here if needed
});

export default rootReducer;