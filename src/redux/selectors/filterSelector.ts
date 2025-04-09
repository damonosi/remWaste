import { createSelector } from "reselect";
import { IRootState } from "../store";

export const useFilterSelector = (state: IRootState) => state.filter;

export const filterSelector = createSelector(
  useFilterSelector,
  (filter) => filter.filter,
);
