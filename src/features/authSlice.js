import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInStatus: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedInStatus = true;
            state.userData = action.payload.userData
        },
        logout:(state) => {
            state.loggedInStatus = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer

// We will also make a Post Slice so that it will also go to Store