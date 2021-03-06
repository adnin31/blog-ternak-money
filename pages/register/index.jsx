import Head from 'next/head'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Content from '../../components/content'

export default function Home() {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header className={styles.registerHeader}>
            <img className={styles.backLogo} src='/icons8-back-50.png' onClick={() => router.back()}/>
            <h1 className={styles.registerTitle}>Daftar Akun</h1>
        </Header>

        <Content className={styles.content}>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <label htmlFor="name" lassName={styles.label} >Email</label>
              <input id="name" name="name" type="text" autoComplete="email" required className={styles.input}/>

              <label htmlFor="password" lassName={styles.label} >Password</label>
              <input id="password" name="password" type="password" autoComplete="password" required className={styles.input}/>

              <button type="submit" className={styles.button}>Daftar</button>
            </form>
          </div>
        </Content>

      </main>
    </Container>
  )
}
