import { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import ErrorPage from 'next/error'
import styles from '../../styles/Roadmap.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Content from '../../components/content'
import FooterDesktop from '../../components/footerDesktop'
import HeaderDesktop from '../../components/headerDesktop'

export default function Roadmap() {
  const router = useRouter()
  const [videoUrl, setvideoUrl] = useState(null)
  const [acordionActive, setAcordionActive] = useState(false)

  const materies = [
    {
      id: 1,
      className: 'Introduction',
      sourceVideo: 'asuransi.mp4',
      isPremiumContent: false
    },
    {
      id: 2,
      className: 'Cara memilih',
      sourceVideo: 'stockmarket.mp4',
      isPremiumContent: false
    },
    {
      id: 3,
      className: 'Benefit',
      sourceVideo: '1.mp4',
      isPremiumContent: false
    },
    {
      id: 4,
      className: 'Investasi',
      sourceVideo: '2.mp4',
      isPremiumContent: false
    },
  ]

  const { pid } = router.query

  if (router.isFallback || !pid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Head>
        <title>Roadmap</title>
        <meta name="description" content="Roadmap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header className={styles.headerMobile}>
          <div className={styles.titleContainer}>
            <img className={styles.backLogo} src='/icons8-back-50.png' onClick={() => router.back()}/>
            <h1 className={styles.title}>{ pid.split('-').join(' ').toUpperCase() }</h1>
          </div>
          <img className={styles.chatLogo} src='/icons8-share-30.png'/>
        </Header>
        <HeaderDesktop />

        <Content className={styles.content}>
          {
            videoUrl !== null ? (
              <video id='classVideo' className={`${styles.videoContainer}`} key={videoUrl} controls>
                <source src={`/${videoUrl}`} type="video/mp4" />
              </video>
            ) : (
              <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
            )
          }
          <div className={styles.accordionContainer}>
            <div className={styles.accordionHeader} onClick={ () => setAcordionActive(!acordionActive) }>
              <h3 className={styles.accordionTitle}>{pid.split('-').join(' ').toUpperCase()}</h3>
              <img className={`${acordionActive ?  styles.upArrow : styles.downArrow }`} src='/icons8-back-50.png'/>
            </div>
            {
              acordionActive && (
                <div className={styles.acordionContentContainer}>
                  <div>
                    {
                      materies.map(matery => (
                        <div key={matery.id} className={styles.listContent} onClick={() => setvideoUrl(matery.sourceVideo)}>
                          {
                            videoUrl !== matery.sourceVideo ? <img className={styles.icon} src='/icons8-rectangle-48.png' />
                            : <img className={styles.icon} src='/icons8-checkmark-50.png' />
                          }
                          <p className={styles.listName}>{matery.className}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }
          </div>
        </Content>
        <FooterDesktop />
      </main>
    </Container>
  )
}
