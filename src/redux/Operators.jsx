import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const phonebookContacts = axios.create({
    baseURL: 'https://645a2f9965bd868e93137845.mockapi.io/',
});

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await phonebookContacts.get('/contacts');
            return response.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await phonebookContacts.post('/contacts', contact);
            return response.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await phonebookContacts.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (event) { 
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

