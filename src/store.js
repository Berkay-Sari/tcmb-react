import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice";
import { meyvelerReducer } from "./meyvelerslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    meyveler: meyvelerReducer,
  },
});
