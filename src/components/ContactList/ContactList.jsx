import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
