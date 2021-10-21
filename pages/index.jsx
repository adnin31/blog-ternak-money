import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../components/container'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '../styles/Home.module.css'

SwiperCore.use([Pagination])

const renderSwipe = () => {
  return (
    <Swiper
      pagination={{
        "clickable": true
      }}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={10}
      className="mySwiper">
      <SwiperSlide className={styles.sliderWrapper}>
         <img className="swiper-slide" src='/business-facebook-cover-09.jpg'/>
      </SwiperSlide>
      <SwiperSlide className={styles.sliderWrapper}>
        <img className="swiper-slide" src="SL_031721_41490_35.jpg" />
      </SwiperSlide>
      <SwiperSlide className={styles.sliderWrapper}>
        <img className="swiper-slide" src='/business-facebook-cover-09.jpg'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default function Home() {
  const articles = [1,2,3,4,5,6,7,8,9,10,11]
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
          <Header>
            <h1 className={styles.title}>NEW JIC</h1>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>

          <Content>
            <div className={styles.menu}>
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

            <div className={styles.swiperContainer}>
              {renderSwipe()}
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Live Classes</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.contentContainer}>
                {
                  articles.map(article => (
                    <div key={article} className={styles.previewBox} onClick={() => router.push(`/article/${article}`)} >
                      <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                      <div className={styles.previewTextContainer}>
                        <p className={styles.previewDate}>Jum, 20 okt 21 &#183; 19.00 WIB</p>
                        <h2 className={styles.previewTitle}>Welcome to NEW JIC</h2>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>New JIC Academy</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.contentContainer}>
                {
                  academies.map((academy, index) => (
                    <div key={index} className={styles.previewAcademy}>
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
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Trending News</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.articleContainer}>
                <div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)} >
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)}>
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)}>
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                  <div className={styles.trendingNewsContainer} onClick={() => router.push(`/article/lorem-ipsum`)}>
                    <img className={styles.articleImage} src={'/image-not-available.jpeg'} />
                    <div className={styles.articleTextContainer}>
                      <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                      <p className={styles.articleDate}>Jum, 20 okt 21</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Recordings</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.contentContainer}>
                {
                  articles.map(article => (
                    <div key={article}  className={styles.previewBox}>
                      <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                      <div className={styles.previewTextContainer}>
                        <p className={styles.previewDate}>Jum, 20 okt 21 &#183; 19.00 WIB</p>
                        <h2 className={styles.previewTitle}>Welcome to NEW JIC</h2>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </Content>
          <Footer />
        </main>
      </Container>
    </div>
  )
}
