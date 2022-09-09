import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers/usersReducer.js";
import api from "./middleware/api.js";

export default function store() {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), api],
    });
}