import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

// генератори єкшенов
export const { setFilter } = contactsFilterSlice.actions;
// редусер слайс
export const filterReducer = contactsFilterSlice.reducer;
