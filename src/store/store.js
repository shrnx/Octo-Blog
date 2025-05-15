// Why we are making this - because our store atleast knows whether user is logged in or not

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"

const store = configureStore({
    reducer: authReducer
});

export default store;