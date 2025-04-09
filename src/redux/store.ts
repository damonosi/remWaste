import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export default store;
