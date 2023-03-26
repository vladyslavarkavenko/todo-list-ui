import {useDispatch, useSelector} from "react-redux";
import {createSlice} from '@reduxjs/toolkit';

import api from "../../api";
import {login, signup} from "../../api/auth";
import {getAsyncActionWrapper} from "../../helpers/getAsyncActionWrapper";

// Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        error: null,
        isLoading: false,

        user: null,
    },
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setUser: (state, action) => {
            const {name, email} = action.payload;
            state.user = {name, email};
        },
    },
});

// Sync actions
const {setError, setIsLoading, setUser} = authSlice.actions;

// Async actions
const asyncActionWrapper = getAsyncActionWrapper({ setIsLoading, setError });

const loginUser = asyncActionWrapper(async ({email, password}, dispatch) => {
    const {data: {user, accessToken}} = await login({email, password});
    dispatch(setUser(user));
    api.setAccessToken(accessToken);
});
const signupUser = asyncActionWrapper(async ({name, email, password}, dispatch) => {
    const {data: {user, accessToken}} = await signup({name, email, password});
    dispatch(setUser(user));
    api.setAccessToken(accessToken);
});


export const useAuth = () => {
    const error = useSelector((state) => state.auth.error);
    const isLoading = useSelector((state) => state.auth.isLoading);

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    return {
        error,
        isLoading,

        user,

        loginUser: (payload) => dispatch(loginUser(payload)),
        signupUser: (payload) => dispatch(signupUser(payload)),
    }
};
