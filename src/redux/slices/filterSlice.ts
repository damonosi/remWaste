import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
