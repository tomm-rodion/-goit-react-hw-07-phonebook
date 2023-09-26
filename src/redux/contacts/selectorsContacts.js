import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectISLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContacrtList = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);

// export const selectContacrtList = state => {
//   const contactsItems = selectContacts(state);

//   console.log(selectFilter);
//   return contactsItems.items.filter(contact =>
//     contact.name.toLowerCase().includes(selectFilter().toLowerCase())
//   );
// };
