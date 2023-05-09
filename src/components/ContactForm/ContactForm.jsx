import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactSlice';
import { getContacts } from 'redux/Selectors';
import Notiflix from 'notiflix';

export const ContactForm = () => {

  const elementID = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };
    console.log('newContact', newContact);

    let isRepeating = false;
    console.log(isRepeating);

    contacts.forEach(contact => { 
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        Notiflix.Notify.warning(`${newContact.name} is already in contacts.`,{
        position: 'center-top',
        closeButton: true,
        timeout: 500,
        width: '350px',
      });
        isRepeating = true;
        console.log(isRepeating);
      } else if (contact.number.toLowerCase() === newContact.number.toLowerCase()) {
        Notiflix.Notify.warning(`${newContact.number} is already in contacts.`,{
        position: 'center-top',
        closeButton: true,
        timeout: 500,
        width: '350px',
      });
        isRepeating = true;
       }
    });

    if (!isRepeating) {
      dispatch(addContact(newContact));
      form.reset();
    }
  };

    return (
        <form className={css.form} htmlFor={elementID} onSubmit={handleSubmit}>
            <label className={css.label}>
                Name
                <input className={css.input} id={elementID}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
            </label>
            <label className={css.label}>
                Number
                <input className={css.input}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
            </label>
            <button className={css.button} type="submit">
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  addNewContact: PropTypes.func,
};

export default ContactForm;