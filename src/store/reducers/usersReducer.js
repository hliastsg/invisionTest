import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/apiActions.js";

const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        usersRequested: (users, action) => {
            users.loading = true;
        },

        usersReceived: (users, action) => {
            users.list = action.payload;
            users.loading = false;
        },

        usersRequestFailed: (users, action) => {
            users.loading = false;
        },
    },
});

export default slice.reducer;

const { usersRequested, usersReceived, usersRequestFailed } = slice.actions;

const url = "/users";

export const loadusers = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: usersRequested.type,
            onSuccess: usersReceived.type,
            onError: usersRequestFailed.type,
        })
    );
};