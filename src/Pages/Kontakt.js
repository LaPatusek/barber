import Map from '../Components/Elements/Map/Map';
import ScrollToTop from '../Components/UI/ScrollToTop';
import styles from './Kontakt.module.css';

export default function Kontakt() {
  return (
    <div className={styles.card}>
      <h1>Skontaktuj się z nami</h1>
      <div className={`${styles.content} grid`}>
        <div className={styles['left-section']}>
          <h4>Telefon</h4>
          <p>+48 111 111 111</p>

          <h4>Adres</h4>
          <p>Niebylec 111</p>

          <h4>Godziny otwarcia</h4>
          <p>
            Pon. - Czw. 9:00 - 17
            <br />
            Piątek 10 - 17
            <br />
            Sobota 8 - 17
            <br />
            Nd - Zamknięte
          </p>
        </div>

        <div className={styles['right-section']}>
          <Map />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
