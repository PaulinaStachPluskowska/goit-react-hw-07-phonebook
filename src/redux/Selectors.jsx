import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleItems = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    // if (filter === '') return contacts;
        const array = contacts.filter(contact => {
            const filtered = filter.toLowerCase();
            return contact.name.toLowerCase().includes(filtered);
        });
        return array;
    }
);
