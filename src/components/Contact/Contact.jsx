import React from 'react';
import css from './Contact.module.css';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Operators';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };


  return (
    <>
      <p className={css.name}>
        {contact.name}:
      </p>
      <p className={css.number}>
        {contact.number}  
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};


export default Contact;

Contact.propTypes = {
  contact: propTypes.object,
};

