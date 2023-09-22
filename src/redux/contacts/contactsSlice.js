import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(value) {
        return {
          payload: { id: nanoid(), ...value },
        };
      },
    },
    deleteContact(state, action) {
      const updatedDeleteContact = state.filter(
        contact => contact.id !== action.payload
      );
      return updatedDeleteContact;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
