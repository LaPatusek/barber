import Map from '../Components/Elements/Map/Map';
import styles from './Kontakt.module.css';

const Kontakt = () => {

  return (
    <div className={styles.card}>
      <h1>Skontaktuj się z nami</h1>

      <div className={styles['left-section']}>
        <h4>Adres</h4>
        <p>Niebylec 171</p>

        <h4>Telefon</h4>
        <p>+48 737 350 559</p>

        <h4>Godziny otwarcia</h4>
        <p>
          Wt. - Czw. 9:00 - 17
          <br />
          Piątek 10 - 17
          <br />
          Sobota 8 - 17
          <br />
          Nd & Pon - Zamknięte
        </p>
      </div>

      <div className={styles['right-section']}>
        <Map />
      </div>
    </div>
  );
};

export default Kontakt;
