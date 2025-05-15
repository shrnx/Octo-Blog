// Why we are making this - because our store atleast knows whether user is logged in or not

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"
// ye sirf import karte samay ka name hai kuch bhi likh sakte hai
// As from authSlice.js we are exporting that reducer as default, so no worries. 
// We can also import it like xyz, then use it like reducer: xyz

const store = configureStore({
    reducer: {
        authReducer
    }
});

export default store;