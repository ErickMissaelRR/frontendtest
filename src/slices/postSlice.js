import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASELOGINURL = 'https://jsonplaceholder.typicode.com'

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        postsData: [],
        usersData: []
    },
    reducers: {
        setPostsData: (state, action) => {
            return void (state.postsData = action.payload);
        },
        setUserData: (state, action) => {
            return void (state.usersData = action.payload);
        }
    },
})

export const { setPostsData } = postSlice.actions;
export const { setUserData } = postSlice.actions;

export default postSlice.reducer;

export const getPostsById = (id) => (dispatch) => {
    axios.get(BASELOGINURL + `/posts?userId=${id}`)
        .then((response) => {
            console.log("posts", response)
            dispatch(setPostsData(response.postsData))
        }).catch(function (error) {
            console.log(error)
        }
        )
}

export const getUserById = (id) => (dispatch) => {
    axios.get(BASELOGINURL + `/users/${id}/albums`)
        .then((response) => {
            console.log("album",response.data)
            dispatch(setUserData(response.data))
        }).catch(function (error) {
            console.log(error)
        }
        )
}