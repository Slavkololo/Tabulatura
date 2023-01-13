import { AppState } from "./app.state.d";
import { configureStore } from "@reduxjs/toolkit";
import { instrumentsReducer } from "./instruments";
import { useDispatch } from "react-redux";

export const appStore = configureStore<AppState>({
  reducer: {
    // title: ,
    instruments: instrumentsReducer,
    // time signature:
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
