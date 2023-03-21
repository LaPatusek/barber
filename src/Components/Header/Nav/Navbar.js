import { HambergerMenu } from 'iconsax-react';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuIsVis, setMenuIsVis] = useState(false);

  const menuHandler = () => {
    setMenuIsVis((prev) => !prev);
  };

  return (
    <Fragment>
      <div className={styles.navbar}>
        <NavLink to='/main'>Strona główna</NavLink>
        <NavLink to='/o-nas'>O nas</NavLink>
        <NavLink to='/services'>Usługi</NavLink>
        <NavLink to='/kontakt'>Kontakt</NavLink>
      </div>

      <div className={styles['navbar-800']}>
        <div className={styles['hamburger-menu-icon']}>
          <HambergerMenu size='32' onClick={menuHandler} />
        </div>

        {menuIsVis && (
          <div className={styles['navbar-menu-800']}>
            <NavLink
              to='/main'
              className={styles['menu-item-800']}
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
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
