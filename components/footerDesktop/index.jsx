import { useRouter } from 'next/router'

import styles from '../../styles/Home.module.css'


export default function FooterDesktop() {
  const router = useRouter()

  return (
    <div className={styles.footerDesktop}>
      <div className={styles.footerContainer}>
        <h2>Explore</h2>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-graduation-cap-60.png' />
          <p className={styles.nameBox}>All Classes</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-ticket-100.png' />
          <p className={styles.nameBox}>Event Gratis</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-video-camera-128.png' />
          <p className={styles.nameBox}>Kelas Live</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-graduation-cap-60.png' />
          <p className={styles.nameBox}>All Classes</p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <h2>About</h2>
        <div className={styles.menuBox}>
          <p className={styles.nameBox}>Careers</p>
        </div>
        <div className={styles.menuBox}>
          <p className={styles.nameBox}>Privacy</p>
        </div>
        <div className={styles.menuBox}>
          <p className={styles.nameBox}>Terms</p>
        </div>
        <div className={styles.menuBox}>
          <p className={styles.nameBox}>Social Impact</p>
        </div>
        <div className={styles.menuBox}>
          <p className={styles.nameBox}>Support</p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <h2>Social</h2>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-twitter-60.png' />
          <p className={styles.nameBox}>Twitter</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-instagram-48.png' />
          <p className={styles.nameBox}>Instagram</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-facebook-30.png' />
          <p className={styles.nameBox}>Facebook</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-youtube-48.png' />
          <p className={styles.nameBox}>Youtube</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-linkedin-30.png' />
          <p className={styles.nameBox}>Linkedin</p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <h2>Payment Method</h2>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-visa-100.png' />
          <p className={styles.nameBox}>Visa</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-mastercard-96.png' />
          <p className={styles.nameBox}>Mastercard</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-american-express-100.png' />
          <p className={styles.nameBox}>American Express</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-paypal-50.png' />
          <p className={styles.nameBox}>Paypal</p>
        </div>
        <div className={styles.menuBox}>
          <img className={styles.logoBox} src='/icons8-jcb-50.png' />
          <p className={styles.nameBox}>JCB</p>
        </div>
      </div>
    </div>
  )
}
