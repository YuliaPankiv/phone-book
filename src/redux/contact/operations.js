import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsApi,
  deleteContactsApi,
  getContactsApi,
} from '../../components/service/api/apiContact';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await addContactsApi(contact);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactsApi(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts / update',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await EditContactsApi(id);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
