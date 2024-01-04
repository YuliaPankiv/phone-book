import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleAddContactFulfilled,
  handleDeleteContactsFulfilled,
  handleFetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
  typeAction,
} from '../../components/service/sliceFunctions/contactFuncSlice';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
      filter: '',
    },
  },
  reducers: {
    filterValue: (state, { payload }) => {
      console.log(state);
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(isAnyOf(...typeAction('pending')), handlePending)
      .addMatcher(isAnyOf(...typeAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...typeAction('rejected')), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
export const { filterValue } = contactSlice.actions;
