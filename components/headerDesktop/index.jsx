import { useRouter } from 'next/router'

import Header from '../header'

import styles from '../../styles/Home.module.css'


export default function HeaderDesktop() {
  const router = useRouter()

  return (
    <Header className={styles.header}>
      <h1 className={styles.title}  onClick={() => router.push('/')}>NEW JIC</h1>
      <div className={styles.desktopHeader}>
        <a className={styles.menu} onClick={() => router.push('/')}>Home</a>
        <a className={styles.menu} onClick={() => router.push('/news')}>News</a>
        <a className={styles.menu} onClick={() => router.push('/classes')}>Classes</a>
        <a className={styles.menu}>Member</a>
        <a className={styles.menu} onClick={() => router.push('/login')}>Sign In</a>
      </div>
      <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
    </Header>
  )
}
