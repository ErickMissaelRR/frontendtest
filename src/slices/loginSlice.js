import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASELOGINURL = 'https://reqres.in'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: '',
    password: '',
    token: '',
    error: ''
  },
  reducers: {
    setToken: (state, action) => {
      return void(state.token = action.payload);
    },
    setError: (state, action) => {
      return void(state.error = action.payload);
    },
    logout: state => {
      return state.token = undefined;
    }
  },
})

export const { setToken } = loginSlice.actions;
export const { setError } = loginSlice.actions;
export const { logout } = loginSlice.actions;

export default loginSlice.reducer;

export const postLogin = (form) => (dispatch) => {
  axios.post(BASELOGINURL + '/api/login', form)
  .then((response) => {
    if(response.status === 200){
      dispatch(setToken(response.data.token))
    } 
  }).catch(function (error){
    dispatch(setError(error.response.data.error))
  }
  )
}
