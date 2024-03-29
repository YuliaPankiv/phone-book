import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../../redux/contact/operations';

export const arrThunk = [addContact, deleteContact, fetchContacts];

export const typeAction = type => arrThunk.map(el => el[type]);

export const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.items.push(payload);
};

export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
};

export const handleDeleteContactsFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
  state.contacts.error = null;
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

export const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
