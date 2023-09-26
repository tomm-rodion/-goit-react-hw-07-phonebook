import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContactsById, fetchContacts } from './operations';
import {
  handleAddContactFulfilledReducer,
  handleDeleteContactsFulfilledReducer,
  handleFetchContactsFulfilledReducer,
  handleFulfiledReducer,
  handlePendingReducer,
  handleRejectedReducer,
} from './reducers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  extraReducers: bulder => {
    bulder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilledReducer)
      .addCase(addContacts.fulfilled, handleAddContactFulfilledReducer)
      .addCase(
        deleteContactsById.fulfilled,
        handleDeleteContactsFulfilledReducer
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContactsById.pending
        ),
        handlePendingReducer
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContactsById.rejected
        ),
        handleRejectedReducer
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContacts.fulfilled,
          deleteContactsById.fulfilled
        ),
        handleFulfiledReducer
      );
  },
});
// isAnyOf- повертає true, якщо хоча б одна з умов виконується

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  deleteContact,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
