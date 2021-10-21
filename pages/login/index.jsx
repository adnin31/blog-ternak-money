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
        <Header>
          <p className={styles.articleDate} onClick={() => router.push('/')}>Lewati</p>
        </Header>

        <Content className={styles.content}>
          <div>
            <form>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </Content>

      </main>
    </Container>
  )
}
