import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASELOGINURL = 'https://reqres.in'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: '',
    password: '',
    token: ''
  },
  reducers: {
    setToken: (state, action) => {
      console.log(state.token = action.payload)
      return void(state.token = action.payload);
    },
  }
})

export const { setToken } = loginSlice.actions;

export default loginSlice.reducer;

export const postLogin = (form) => (dispatch) => {
  axios.post(BASELOGINURL + '/api/login', form)
  .then((response) => {
    dispatch(setToken(response.data.token))
  })
}