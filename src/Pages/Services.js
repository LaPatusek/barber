import backgroundPhoto from '../Assets/barber-interior.jpg';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.card}>
      <div className={styles['image-box']}>
        <img src={backgroundPhoto} alt='' />
        <h1>
          Lorem ipsum <br /> dolor sit amet
        </h1>
      </div>

      <div className={styles['services-section']}>
        <div className={styles['service-section--title']}>
          <h2>Nasza oferta</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
