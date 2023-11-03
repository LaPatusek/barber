import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Navbar from './Nav/Navbar';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to='/main' className={styles.logo}>
        <h2>
          Zakład Fryzjerski <br />
          <span className={styles['title--second-row']}>u DAWIDA</span>
        </h2>
      </Link>
      <Navbar />
    </div>
  );
}
