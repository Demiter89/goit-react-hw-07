import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice'; // Імпортуємо фільтр

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;

// Додаємо СЕЛЕКТОРИ 👇

export const selectContactsItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) return [];

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);