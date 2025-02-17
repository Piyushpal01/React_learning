// Store 

// Step-1 => first we need to bring configureStore from RTK
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice"

// step-2 => using the method we export store 
export const store = configureStore({
    reducer:todoReducer
});

// in next 3rd step we first create reducers.