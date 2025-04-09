import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface DataState {
  data: {
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    area: string;
    created_at: string;
    forbidden: boolean;
    hire_period_days: number;
    id: number;
    per_tonne_cost: number;
    postcode: string;
    price_before_vat: number;
    size: number;
    transport_cost: string;
    updated_at: string;
    vat: number;
  }[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

// Generates pending, fulfilled and rejected action types
export const fetchData = createAsyncThunk("data/fetchData", () => {
  return axios
    .get(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
    )
    .then((response) => response.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default dataSlice.reducer;
