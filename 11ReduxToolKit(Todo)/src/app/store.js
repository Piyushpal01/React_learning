// Store 

// Step-1 => first we need to bring configureStore from RTK
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice"; // this we do after creating a rtk file here todoSlcie file and it is a naming convention to keep Slice after name.

// step-2 => using the method we export store 
export const store = configureStore({
    reducer:todoReducer
});

// in next 3rd step we first create reducers.