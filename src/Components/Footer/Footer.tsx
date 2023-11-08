import { Call } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <section className={styles['first-section']}>
        <h3>Lokalizacja</h3>
        <p>Niebylec 111</p>
      </section>

      <section className={styles['second-section']}>
        <h3>Godziny otwarcia</h3>
        <p>
          Pon. - Czw. 9:00 - 17
          <br />
          Piątek 10 - 17
          <br />
          Sobota 8 - 17
          <br />
          Nd - Zamknięte
        </p>
      </section>

      <section className={styles['third-section']}>
        <h3>Kontakt</h3>
        <Link to='/kontakt'>Strona kontaktowa</Link>

        <p>
          <Call color='#888f9b' /> +48 123 123 123
        </p>
      </section>
    </div>
  );
};

export default Footer;
