import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../styles/Footer.module.css'


export default function Footer() {
  const router = useRouter()

  return (
    <div className={styles.footer}>
      <div className={styles.iconContainer} onClick={() => router.push('/')}>
        <img className={styles.footerIcon} src='/icons8-home-100-white.png' />
        <p className={styles.copyIcon}>Home</p>
      </div>
      <div className={styles.iconContainer} onClick={() => router.push('/news')}>
        <img className={styles.footerIcon} src='/icons8-file-100-white.png' />
        <p className={styles.copyIcon}>News</p>
      </div>
      <div className={styles.iconContainer}>
        <img className={styles.footerIcon} src='/icons8-combo-chart-100-white.png' />
        <p className={styles.copyIcon}>Classes</p>
      </div>
      <div className={styles.iconContainer}>
        <img className={styles.footerIcon} src='/icons8-credit-card-100-white.png' />
        <p className={styles.copyIcon}>Member</p>
      </div>
      <div className={styles.iconContainer} onClick={() => router.push('/login')}>
        <img className={styles.footerIcon} src='/icons8-customer-100-white.png' />
        <p className={styles.copyIcon}>Profile</p>
      </div>
    </div>
  )
}
