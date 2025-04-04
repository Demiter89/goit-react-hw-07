import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "../../redux/contactsOps";
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  
  const handleDelete = (id) => {
    dispatch(deleteContact(id));  // Викликаємо функцію для видалення контакту
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <p>{name}: {number}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;