import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';

import ContactForm from '../components/ContactForm/ContactForm'; // ✅ Додано
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}> {/* ✅ Використано стилі з модуля */}
      <h1>Книга контактів</h1>
      <div className={styles.container}>
        <ContactForm />            {/* ✅ Додано компонент форми */}
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;