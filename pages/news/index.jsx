import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'
import HeaderDesktop from '../../components/headerDesktop'
import FooterDesktop from '../../components/footerDesktop'

import styles from '../../styles/News.module.css'


export default function Home() {
  const articles = [1,2,3,4,5,6,7,8,9,10]

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
          <Header className={styles.headerMobile}>
            <h1 className={styles.title}>NEWS</h1>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>
          <HeaderDesktop />

          <Content className={styles.content}>
            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Trending News</p>
              </div>

              <div className={styles.trendingWrapper}>
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
                  {
                    articles.map(article => (
                      <div key={article} className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                        <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                        <div className={styles.articleTextContainer}>
                          <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                          <p className={styles.articlePreview}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt sapien vel ultrices tincidunt. Aenean ut urna ipsum. Maecenas pulvinar et tellus id lacinia. In egestas felis ligula, at ornare turpis mollis eget. Donec condimentum orci ut elementum varius.
                          </p>
                          <p className={styles.articleDate}>Jum, 20 okt 21</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </Content>

          <FooterDesktop />
          <Footer />
        </main>
      </Container>
    </div>
  )
}
