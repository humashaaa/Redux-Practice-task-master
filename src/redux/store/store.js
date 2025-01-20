import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskSlice from './../features/task/taskSlice';
import userSlice from './../features/user/userSlice';
import baseApi from "../features/api/baseApi";

const store = configureStore({
    reducer : {
        taskSlice : taskSlice,
        userSlice : userSlice,
        [baseApi.reducerPath] : baseApi.reducer,


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})


export default store