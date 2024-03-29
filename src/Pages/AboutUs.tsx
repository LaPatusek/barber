import React from 'react';
import { Link } from 'react-router-dom';
import MasonryLayout from '../Components/Elements/MansoryLayout/MasonryLayout.tsx';
import ScrollToTop from '../Components/UI/ScrollToTop.tsx';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles['first-section']}>
        <div className={styles['about-us-text']}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae hendrerit elit. Nulla pellentesque nulla eget lectus ornare,
            non sollicitudin metus aliquet. Aliquam condimentum nunc lorem, et
            eleifend arcu porttitor sit amet. Vivamus pulvinar at justo sed
            ornare. Suspendisse faucibus, magna eget molestie volutpat, magna
            erat congue ex, in sagittis ligula tellus id odio. In eleifend
            congue risus vel suscipit.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae hendrerit elit. Nulla pellentesque nulla eget lectus ornare,
            non sollicitudin metus aliquet. Aliquam condimentum nunc lorem, et
            eleifend arcu porttitor sit amet. Vivamus pulvinar at justo sed
            ornare. Suspendisse faucibus, magna eget molestie volutpat, magna
            erat congue ex, in sagittis ligula tellus id odio. In eleifend
            congue risus vel suscipit.
          </p>
          <h3>Sprawdź nasze usługi, aby dowiedzieć się więcej</h3>

          <Link to='/services' className={styles['service-button']}>
            Nasze usługi
          </Link>
        </div>

        <hr />
        <div className={styles['faq-wrap']}>
          <h3 className={styles['faq-title']}>Najczęsciej zadawane pytania</h3>
          <div className={`${styles.faq} grid`}>
            <div className={styles['faq-section']}>
              <hr />
              <h4> Lorem ipsum dolor sit amet?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae hendrerit elit.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur vitae hendrerit elit.
              </p>
              <hr />
              <h4> Lorem ipsum dolor sit amet?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae hendrerit elit.
              </p>
            </div>

            <div className={styles['faq-section']}>
              <hr />
              <h4> Lorem ipsum dolor sit amet?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae hendrerit elit.
              </p>
              <hr />
              <h4> Lorem ipsum dolor sit amet?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae hendrerit elit.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className={styles['our-saloon']}>
          <h3>Nasz salon</h3>
        </div>

        <MasonryLayout />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AboutUs