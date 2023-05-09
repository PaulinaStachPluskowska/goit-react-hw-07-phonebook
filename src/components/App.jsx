// import React, { useEffect } from 'react';
import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
// import { setInitialItems } from '../redux/ContactSlice';
// import { useDispatch } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem('items'));
  //   if (storage === null) {
  //     dispatch(
  //       setInitialItems([
  //         { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //         { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //         { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //         { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  //       ])
  //     );
  //   } else {
  //     dispatch(setInitialItems(storage));
  //   }
  //   // eslint-disable-next-line
  // }, []);

    return (
      <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.secondHeader}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
};

export default App;





