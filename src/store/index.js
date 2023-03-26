import {configureStore} from '@reduxjs/toolkit';

import {todoSlice} from "./todo";
import {authSlice} from "./auth";

export const store = configureStore({
    devTools: process.env.NODE_ENV === 'development' ? {trace: true} : false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer: {
        auth: authSlice.reducer,
        todo: todoSlice.reducer,
    },
});
