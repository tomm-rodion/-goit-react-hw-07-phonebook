import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650da63fa8b42265ec2c8b53.mockapi.io';

//зовнішні (actions),створюють action
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const resp = await axios.post('/contacts', { name, number });
      Notiflix.Notify.success('Contact was added !', { timeout: 2000 });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsById = createAsyncThunk(
  'contacts/deleteContactsById',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`);
      Notiflix.Notify.info('Contact was delete !', { timeout: 2000 });
      return resp.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);
