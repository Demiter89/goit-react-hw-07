import { useEffect } from 'react';  
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';

import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import './App.css';  // Оновлений імпорт

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">  {/* Замість styles.app */}
      <h1>Книга контактів</h1>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;