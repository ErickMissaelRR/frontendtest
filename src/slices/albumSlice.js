import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASELOGINURL = 'https://reqres.in'

export const albumSlice = createSlice({
    name: "album",
    initialState: {
        usersData: [],
    },
    reducers: {
        setUserData: (state, action) => {
            return void (state.usersData = action.payload);
        },
    },
})

export const { setUserData } = albumSlice.actions;

export default albumSlice.reducer;

export const getAllUsersData = () => (dispatch) => {
    axios.get(BASELOGINURL + '/api/users')
        .then((response) => {
            dispatch(setUserData(response.data.data))
        }).catch(function (error) {
            console.log(error)
        }
        )
}

