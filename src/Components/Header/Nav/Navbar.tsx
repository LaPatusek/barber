import { HambergerMenu } from 'iconsax-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuIsVis, setMenuIsVis] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLAnchorElement>(null);
  const secondRef = useRef<HTMLAnchorElement>(null);
  const thirdRef = useRef<HTMLAnchorElement>(null);
  const forthRef = useRef<HTMLAnchorElement>(null);
  const fifthRef = useRef<HTMLDivElement>(null);

  const menuHandler = () => {
    setMenuIsVis((s) => !s);
  };

  useEffect(() => {
    if (menuIsVis) {
      document.body.style.overflowY = 'hidden';

      const menuRefCurr = menuRef.current;
      const firstRefCurr = firstRef.current;
      const secondRefCurr = secondRef.current;
      const thirdRefCurr = thirdRef.current;
      const forthRefCurr = forthRef.current;
      const fifthRefCurr = fifthRef.current;

      setTimeout(() => {
        menuRefCurr?.classList.toggle(styles['active-menu-800']);

        firstRefCurr?.classList.toggle(styles['visible-menu-item-800']);
        secondRefCurr?.classList.toggle(styles['visible-menu-item-800']);
        thirdRefCurr?.classList.toggle(styles['visible-menu-item-800']);
        forthRefCurr?.classList.toggle(styles['visible-menu-item-800']);
        fifthRefCurr?.classList.toggle(styles['visible-menu-item-800']);
      }, 200);
    }
    if (!menuIsVis) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuIsVis]);

  return (
    <Fragment>
      <div className={`${styles.navbar}`}>
        <NavLink to='/o-nas' className={`${styles['menu-item']}`}>
          O nas
        </NavLink>
        <NavLink to='/services' className={styles['menu-item']}>
          Usługi
        </NavLink>
        <NavLink to='/kontakt' className={styles['menu-item']}>
          Kontakt
        </NavLink>
      </div>

      <div className={styles['navbar-800']}>
        <div className={styles['hamburger-menu-icon']}>
          <HambergerMenu size='32' onClick={menuHandler} />
        </div>

        {menuIsVis && (
          <div className={styles.overlay} onClick={menuHandler}>
            <div className={`${styles['navbar-menu-800']}`} ref={menuRef}>
              <NavLink
                to='/main'
                className={styles['menu-item-800']}
                ref={firstRef}
              >
                <span>
                  Strona <br /> główna
                </span>
              </NavLink>

              <NavLink
                to='/o-nas'
                className={styles['menu-item-800']}
                ref={secondRef}
              >
                <span>O nas</span>
              </NavLink>

              <NavLink
                to='/services'
                className={styles['menu-item-800']}
                ref={thirdRef}
              >
                <span>Usługi</span>
              </NavLink>

              <NavLink
                to='/kontakt'
                className={styles['menu-item-800']}
                ref={forthRef}
              >
                <span> Kontakt</span>
              </NavLink>

              <div className={styles['menu-item-800']} ref={fifthRef}>
                <span> Zamknij </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
