import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';

const Main = () => {
  return (
    <Fragment>
      <div className={styles.main}>
        <div className={styles['main-title']}>
          <h1>
            ZAKŁAD <br /> FRYZJERSKI <br />
            <span className={styles['second-part-of-title']}> u DOROTY </span>
          </h1>

          <NavLink to='/kontakt' className={styles['kontakt-button']}>
            Kontakt
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
