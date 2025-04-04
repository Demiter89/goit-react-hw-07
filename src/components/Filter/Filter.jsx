import { useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';

import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Фільтрувати по імені:</label>
      <input
        type="text"
        id="filter"
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}

export default Filter;