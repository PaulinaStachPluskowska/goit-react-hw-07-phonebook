import React from 'react';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/Selectors';

const filteredItems = (contacts, filter) => {
  if (filter === '') return contacts;
  const array = contacts.filter(contact => {
    const filtered = filter.toLowerCase();
    return contact.name.toLowerCase().includes(filtered);
  });
  return array;
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = filteredItems(contacts, filter);

    return (
        <ul className={css.list}>
            {visibleContacts?.map(contact => (
                <li className={css.item} key={contact.id}>
                  <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

// ContactList.propTypes = {
//     // onDelete: PropTypes.func.isRequired,
//     filterContacts: PropTypes.func,
// };

export default ContactList;