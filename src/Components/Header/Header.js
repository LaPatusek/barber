import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Navbar from './Nav/Navbar';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to='/main'>
        <h2>
          Zakład Fryzjerski <br /> <span className={styles['title--second-row']}>u DOROTY</span>
        </h2>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
