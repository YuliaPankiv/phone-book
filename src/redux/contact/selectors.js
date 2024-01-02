import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts.items;
export const selectFilter = state => state.contact.filter

  export const selectLoading = state =>  state.contact.contacts.isLoading;


export const filterContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    return filter
      ? contacts.filter(item => item.name.toLowerCase().includes(filter))
      : contacts;
  }
);
