import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export default store;
