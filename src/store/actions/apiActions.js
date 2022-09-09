import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucess = createAction("apiActions/callSuccess");
export const apiCallFailed = createAction("apiActions/callFailed");