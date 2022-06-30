import { configureStore } from '@reduxjs/toolkit';
//reducers
import loginSlice  from '../slices/loginSlice';

export default configureStore({
    reducer: {
        loginSlice
    }
});