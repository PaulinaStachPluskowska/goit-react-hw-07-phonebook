import React from 'react';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleItems} from 'redux/Selectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleItems);

  return (
    <div>
      <ul className={css.list}>
        { !!isLoading && <Loader />}
            {!!visibleContacts && visibleContacts.map(contact => (
              <li className={css.item} key={contact.id}>
                <Contact contact={contact} />
              </li>
          ))}
      </ul>
      </div>
    );
};

export default ContactList;