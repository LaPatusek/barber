import { Link } from 'react-router-dom';
import MasonryLayout from '../Components/Elements/MansoryLayout/MasonryLayout';
import ScrollToTop from '../Components/UI/ScrollToTop';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.box}>
      <section className={styles['first-section']}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae hendrerit elit. Nulla pellentesque nulla eget lectus ornare, non
          sollicitudin metus aliquet. Aliquam condimentum nunc lorem, et
          eleifend arcu porttitor sit amet. Vivamus pulvinar at justo sed
          ornare. Suspendisse faucibus, magna eget molestie volutpat, magna erat
          congue ex, in sagittis ligula tellus id odio. In eleifend congue risus
          vel suscipit.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae hendrerit elit. Nulla pellentesque nulla eget lectus ornare, non
          sollicitudin metus aliquet. Aliquam condimentum nunc lorem, et
          eleifend arcu porttitor sit amet. Vivamus pulvinar at justo sed
          ornare. Suspendisse faucibus, magna eget molestie volutpat, magna erat
          congue ex, in sagittis ligula tellus id odio. In eleifend congue risus
          vel suscipit.
        </p>
        <h3>Sprawdź nasze usługi, aby dowiedzieć się więcej</h3>

        <Link to='/services' className={styles['service-button']}>
          Nasze usługi
        </Link>

        <hr />
        <h3 className={styles['faq-title']}>Najczęsciej zadawane pytania</h3>
        <div className={styles.faq}>
          <div className={styles['faq-section']}>
            <hr />
            <h4> Lorem ipsum dolor sit amet?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae hendrerit elit.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur vitae hendrerit elit.
            </p>
            <hr />
            <h4> Lorem ipsum dolor sit amet?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae hendrerit elit.
            </p>
          </div>

          <div className={styles['faq-section']}>
            <hr />
            <h4> Lorem ipsum dolor sit amet?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae hendrerit elit.
            </p>
            <hr />
            <h4> Lorem ipsum dolor sit amet?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae hendrerit elit.
            </p>
          </div>
        </div>

        <hr />
        <h3 className={styles['faq-title']}>Nasz salon</h3>

        <MasonryLayout />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
