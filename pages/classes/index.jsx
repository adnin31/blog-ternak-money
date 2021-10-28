import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'
import HeaderDesktop from '../../components/headerDesktop'
import FooterDesktop from '../../components/footerDesktop'

import styles from '../../styles/Classes.module.css'


export default function Home() {
  const articles = [1,2,3,4,5,6,7,8,9,10]
  const academies = [
    {
      class: 'Asuransi 101',
      level: 'Basic',
      totalVideo: 14,
    },
    {
      class: 'Saham 101',
      level: 'Basic',
      totalVideo: 14,
    },
    {
      class: 'Reksadana 101',
      level: 'Basic',
      totalVideo: 15,
    },
    {
      class: 'Crypto 101',
      level: 'Beginner',
      totalVideo: 13,
    },
    {
      class: 'Personal Finance 101',
      level: 'Basic',
      totalVideo: 13,
    },
    {
      class: 'Personal Finance 101',
      level: 'Basic',
      totalVideo: 13,
    },
    {
      class: 'Personal Finance 101',
      level: 'Basic',
      totalVideo: 13,
    },
    {
      class: 'Personal Finance 101',
      level: 'Basic',
      totalVideo: 13,
    },
    {
      class: 'Personal Finance 101',
      level: 'Basic',
      totalVideo: 13,
    },
  ]

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
            <h1 className={styles.title}>Classes</h1>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>
          <HeaderDesktop />

          <Content className={styles.content}>
            <h1 className={styles.titleDesktop}>CLASSES</h1>
            <div className={styles.academyWrapper}>
              {
                academies.map((academy, index) => (
                  <div key={index} className={styles.previewAcademy} onClick={() => router.push(`/roadmap/${academy.class.toLocaleLowerCase().split(' ').join('-')}`)} >
                    <img className={styles.academyImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.academyTextContainer}>
                      <h2 className={styles.academyTitle}>{academy.class}</h2>
                      <div className={styles.academyLevelContainer}>
                        <p className={styles.level}>{academy.level}</p>
                        <div className={styles.video}>{academy.totalVideo} Videos</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Content>

          <FooterDesktop />
          <Footer />
        </main>
      </Container>
    </div>
  )
}
