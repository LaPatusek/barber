import { ArrowLeft, ArrowRight } from 'iconsax-react';
import { Fragment, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import interior from '../Assets/barber-interior.jpg';
import barber from '../Assets/barber-photo.jpg';
import haircut from '../Assets/haircut-main-photo.jpg';
import styles from './Main.module.css';

const Main = () => {
  const textRef = useRef(null);
  const secondTextRef = useRef(null);

  useLayoutEffect(() => {
    const text = textRef.current;
    const secondText = secondTextRef.current;

    text.innerHTML = text.textContent.replace(/\S/g, '<span> $& </span>');
    secondText.innerHTML = secondText.textContent.replace(
      /\S/g,
      '<span> $& </span>',
    );

    const ele = text.querySelectorAll('span');
    const secEle = secondText.querySelectorAll('span');
    text.style.transform = `rotate(${-(360 * 0.5)}deg)`;
    for (let i = 0; i < ele.length; i++) {
      ele[i].style.transform = `rotate(${i * ((360 * 2) / ele.length)}deg)`;
      secEle[i].style.transform = `rotate(${
        i * ((360 * 2) / secEle.length)
      }deg)`;
    }
  }, []);

  return (
    <Fragment>
      <div className={styles['upper-main-image']}>
        <img src={haircut} alt='' width='300px' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tincidunt ligula nibh, a blandit erat tempor tincidunt.
        </p>
      </div>
      <div className={styles.main}>
        <section className={styles['first-section']}>
          <div className={styles['main-title']}>
            <h1>
              ZAKŁAD <br /> FRYZJERSKI <br />
              <span className={styles['second-part-of-title']}> u DOROTY </span>
            </h1>

            <Link to='/kontakt' className={styles['kontakt-button']}>
              Kontakt
            </Link>
          </div>
        </section>

        <div className={styles['spacer-with-images']}>
          <div className={styles['interior-img']}>
            <img src={interior} alt='' width='600px' />
          </div>
          <div className={styles['interior-img']}>
            <img src={interior} alt='' width='600px' />
          </div>
        </div>

        <section className={styles['second-section']}>
          <div className={styles.circle}>
            <p id='tekst' ref={textRef}>
              zakład FRYZJERSKI u DOROTY
            </p>
          </div>

          <img src={barber} alt='' width='600px' />
          <div className={styles['right-div']}>
            <h4> O nas </h4>
            <h2>
              Nasze <br /> doświadczenie
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt ligula nibh, a blandit erat tempor tincidunt. Aliquam
              sodales, ipsum eu varius molestie, mauris ex vulputate ex, id
              facilisis nulla dui et sem. Etiam in velit dictum, lacinia justo
              a, varius lacus. Morbi tempor egestas risus ut porta.
            </p>
            <Link to='/o-nas' className={styles['right-div--link']}>
              <ArrowRight /> Więcej o nas
            </Link>
          </div>
        </section>

        <section className={styles['third-section']}>
     
          <div className={styles['left-div']}>
            <h4>Usługi</h4>
            <h2> Lorem ipsum dolor</h2>
            <p>
              From haircuts, to head shaves, gray coverage and more, we've got
              you covered
            </p>
            <p>
              <Link to='/services' className={styles['left-div--link']}>
                Poznaj całą ofertę <ArrowLeft />
              </Link>
            </p>
          </div>
          <img src={barber} alt='' width='600px' />

          <div className={styles['second-circle']}>
            <p id='second-tekst' ref={secondTextRef}>
              zakład FRYZJERSKI u DOROTY
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Main;
