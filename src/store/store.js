import { configureStore } from '@reduxjs/toolkit';
//reducers
import loginSlice  from '../slices/loginSlice';
import postSlice from '../slices/postSlice';
import albumSlice from '../slices/albumSlice';

export default configureStore({
    reducer: {
        loginSlice,
        albumSlice,
        postSlice
    }
});