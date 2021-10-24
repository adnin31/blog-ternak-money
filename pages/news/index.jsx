import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'

import styles from '../../styles/News.module.css'


export default function Home() {
  const articles = [1,2,3,4,5,6,7,8,9,10,11]

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Container>
        <Head>
          <title>NEW JIC</title>
          <meta name="description" content="NEW JIC" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header>
            <h1 className={styles.title}>NEWS</h1>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>

          <Content>
            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Trending News</p>
              </div>

              <div className={styles.contentContainer}>
                {
                  articles.map(article => (
                    <div key={article} className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                      <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                      <div className={styles.articleTextContainer}>
                        <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                        <p className={styles.articleDate}>Jum, 20 okt 21</p>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className={styles.contentContainer}>
                <div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Footer />
        </main>
      </Container>
    </div>
  )
}
