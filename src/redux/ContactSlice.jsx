import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const INITIAL_STATE = 'contacts'

const storageContacts = JSON.parse(localStorage.getItem(INITIAL_STATE));
const contactsInitialState = storageContacts || [];

const setLocalStorage = contacts => {
  localStorage.setItem(INITIAL_STATE, JSON.stringify(contacts));
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        setLocalStorage([...state]);
      },
      prepare(content) {
        return {
          payload: { id: nanoid(), name: content.name, number: content.number, },
        };
      },
    },

    deleteContact(state, action) {
      let filtered = state.findIndex(contact => contact.id === action.payload);
      state.splice(filtered, 1);
      setLocalStorage([...state]);
    },

    setInitialItems(state, action) {
      state.items = action.payload;
      setLocalStorage([...state]);
    },

  },
});

export const { addContact, deleteContact, setInitialItems } =  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;