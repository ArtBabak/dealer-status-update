import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import thunk from "redux-thunk";

export const actions = {
  SET_STATUS: "SET_STATUS",
  GET_RESPONSE: "GET_RESPONSE",
};

const rootReducer = combineReducers({
  mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
