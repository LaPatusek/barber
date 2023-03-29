import { useState } from 'react';
import backgroundPhoto from '../Assets/barber-interior.jpg';
import Long from '../Assets/LongHair.svg';
import Mid from '../Assets/MidHair.svg';
import Short from '../Assets/ShortHair.svg';
import Card from '../Components/UI/Card';
import styles from './Services.module.css';

const Services = () => {
  const [pickedGender, setPickedGender] = useState('female');
  const [hairLength, setHairLength] = useState('mid');

  const femaleFunction = () => {
    setPickedGender('female');
  };

  const manFunction = () => {
    setPickedGender('man');
  };

  const shortHairFunction = () => {
    setHairLength('short');
  };

  const midHairFunction = () => {
    setHairLength('mid');
  };

  const longHairFunction = () => {
    setHairLength('long');
  };

  return (
    <Card>
      <div className={styles['image-box']}>
        <img src={backgroundPhoto} alt='' />
        <h1>
          Lorem ipsum <br /> dolor sit amet
        </h1>
      </div>

      <div className={styles['service-card']}>
        <div className={styles['services-section']}>
          <div className={styles['service-section--title']}>
            <h2>Cennik</h2>
          </div>

          <div className={styles.choice}>
            <h3 className={styles.female} onClick={femaleFunction}>
              ŻEŃSKA
            </h3>

            <h3 className={styles.man} onClick={manFunction}>
              MĘSKA
            </h3>
          </div>

          {pickedGender === 'female' && (
            <div className={styles['selected-choice']}>
              <div className={styles['three-images-in-row']}>
                <h3>Określ długość swoich włosów</h3>

                <img src={Short} alt='' onClick={shortHairFunction} />

                <img src={Mid} alt='' onClick={midHairFunction} />

                <img src={Long} alt='' onClick={longHairFunction} />
              </div>

              <h4>
                Damskie strzyżenie / {hairLength === 'short' && '25zł'}
                {hairLength === 'mid' && '40zł'}
                {hairLength === 'long' && '50zł'}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Cras tincidunt ligula nibh, a blandit erat tempor
                tincidunt.
              </p>

              <div className={styles['three-in-row']}>
                <h4>
                  Damskie strzyżenie <br />/ {hairLength === 'short' && '25zł'}
                  {hairLength === 'mid' && '40zł'}
                  {hairLength === 'long' && '50zł'}
                </h4>
                <p>Barber Only</p>
              </div>

              <div className={styles['three-in-row']}>
                <h4>
                  Strzyżenie grzywki <br />/ {hairLength === 'short' && '25zł'}
                  {hairLength === 'mid' && '40zł'}
                  {hairLength === 'long' && '50zł'}
                </h4>
                <p>Barber Only</p>
              </div>

              <h4>Koloryzacja</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


              <h4>Refleksy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


              <h4>Stylizacja włosów</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <h4>Regneracja</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          )}

          {pickedGender === 'man' && (
            <div className={styles['selected-choice']}>
              <h4>Strzyżenie męskie / 20zł</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Cras tincidunt ligula nibh, a blandit erat tempor
                tincidunt.
              </p>
              <hr />

              <div className={styles['three-in-row']}>
                <h4>
                  Strzyżenie klasyczne <br />/ 20zł
                </h4>
                <p>Barber Only</p>
              </div>

              <div className={styles['three-in-row']}>
                <h4>
                  Strzyżenie klasyczne <br />/ 20zł
                </h4>
                <p>Barber Only</p>
              </div>

              <div className={styles['three-in-row']}>
                <h4>
                  Strzyżenie klasyczne <br />/ 20zł
                </h4>
                <p>Barber Only</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Services;
