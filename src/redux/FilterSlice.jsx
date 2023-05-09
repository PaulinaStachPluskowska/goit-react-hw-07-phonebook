import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    handleFilter(state, { payload }) {
      return payload;
    },
  },
});
export const { handleFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;