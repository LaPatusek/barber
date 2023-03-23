import { Link } from 'react-router-dom';
import haircut from '../../Assets/haircut-main-photo.jpg';
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
      <div className={styles['upper-main-image']}>
        <img src={haircut} alt='' width='300px' />
      </div>
    </div>
  );
};

export default Header;
