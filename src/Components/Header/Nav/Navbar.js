import { HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuIsVis, setMenuIsVis] = useState(false);

  const menuHandler = () => {
    setMenuIsVis((s) => !s);
  };

  useEffect(() => {
    if (menuIsVis) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuIsVis) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuIsVis]);

  return (
    <Fragment>
      <div className={`${styles.navbar}`}>
        <NavLink
          to='/o-nas'
          className={styles['menu-item']}
          activeClassName={styles['active-menu-item']}
        >
          O nas
        </NavLink>
        <NavLink
          to='/services'
          className={styles['menu-item']}
          activeClassName={styles['active-menu-item']}
        >
          Usługi
        </NavLink>
        <NavLink
          to='/kontakt'
          className={styles['menu-item']}
          activeClassName={styles['active-menu-item']}
        >
          Kontakt
        </NavLink>
      </div>

      <div className={styles['navbar-800']}>
        <div className={styles['hamburger-menu-icon']}>
          <HambergerMenu size='32' onClick={menuHandler} />
        </div>

        {menuIsVis && (
          <div className={styles.overlay} onClick={menuHandler}>
            <div className={`${styles['navbar-menu-800']}`}>
              <NavLink
                to='/main'
                className={`${styles['menu-item-800']} `}
                activeClassName={styles['active-menu-item-800']}
              >
                <span>Strona główna</span>
              </NavLink>

              <NavLink
                to='/o-nas'
                className={styles['menu-item-800']}
                activeClassName={styles['active-menu-item-800']}
              >
                <span>O nas</span>
              </NavLink>

              <NavLink
                to='/services'
                className={styles['menu-item-800']}
                activeClassName={styles['active-menu-item-800']}
              >
                <span>Usługi</span>
              </NavLink>

              <NavLink
                to='/kontakt'
                className={styles['menu-item-800']}
                activeClassName={styles['active-menu-item-800']}
              >
                <span> Kontakt</span>
              </NavLink>

              <div className={styles['menu-item-800']}>
                <span> Zamknij </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
