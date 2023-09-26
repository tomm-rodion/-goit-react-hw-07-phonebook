import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContactsById, fetchContacts } from './operations';
// import { nanoid } from 'nanoid';

const handleFetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};
const handleAddContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};
const handleDeleteContactsFulfilledReducer = (state, action) => {
  const updateContactsList = state.items.filter(
    contact => contact.id !== action.payload.id
  );
  state.items = updateContactsList;
};
// isAnyOf- повертає true, якщо хоча б одна з умов виконується

const handlePendingReducer = state => {
  state.isLoading = true;
};
const handleRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfiledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

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

//fetchingInProgress(state) {
//   state.isLoading = true;
// },
// fetchingSuccess(state, action) {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// fetchingError(state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// deleteContact(state, action) {
//   const updatedDeleteContact = state.items.filter(
//     contact => contact.id !== action.payload
//   );
//   return (state.items = updatedDeleteContact);
// },
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.unshift(action.payload);
//       },
//       prepare(value) {
//         return {
//           payload: { id: nanoid(), ...value },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const updatedDeleteContact = state.filter(
//         contact => contact.id !== action.payload
//       );
//       return updatedDeleteContact;
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  deleteContact,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
