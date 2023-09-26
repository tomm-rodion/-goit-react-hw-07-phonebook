import axios from 'axios';
import Notiflix from 'notiflix';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650da63fa8b42265ec2c8b53.mockapi.io';

//зовнішні єкшени (actions),створюють єкшени
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

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const resp = await axios.get('/contacts');
//     console.log(resp.data);
//     dispatch(fetchingSuccess(resp.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
