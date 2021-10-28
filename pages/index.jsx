import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../components/container'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'
import FooterDesktop from '../components/footerDesktop'
import HeaderDesktop from '../components/headerDesktop'

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, FreeMode } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '../styles/Home.module.css'

SwiperCore.use([Pagination, Navigation, FreeMode])

const renderSwipeMobile = () => {
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

const renderSwipeDesktop = () => {
  return (
    <Swiper
      pagination={{
        "clickable": true
      }}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={10}
      navigation
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
  const articles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header className={styles.headerMobile}>
            <h1 className={styles.title}>NEW JIC</h1>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>
          <HeaderDesktop />

          <Content>
            <div className={styles.desktopBanner}>
              <form className={styles.form}>
                <label htmlFor="name" lassName={styles.label} >Email</label>
                <input id="name" name="name" type="text" autoComplete="email" required className={styles.input}/>

                <label htmlFor="password" lassName={styles.label} >Password</label>
                <input id="password" name="password" type="password" autoComplete="password" required className={styles.input}/>

                <button type="submit" className={styles.button}>Sign in</button>

                <p className={styles.copy}>Belum Punya Akun ?<span className={styles.register} onClick={() => router.push('/register')}>Daftar</span></p>
              </form>
              <div className={styles.swiperContainerDesktop}>
                {renderSwipeDesktop()}
              </div>
              <div className={styles.swiperContainerMobile}>
                {renderSwipeMobile()}
              </div>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.event}>Trending News</p>
                <p className={styles.action} onClick={() => router.push(`/article/lorem-ipsum`)}>Lihat semua</p>
              </div>

              <div className={styles.articleContainerDesktop}>
                <Swiper
                  slidesPerView={5}
                  centeredSlides={true}
                  spaceBetween={200}
                  initialSlide={3}
                  navigation
                  freeMode={true}
                  className="mySwiperarticle">
                  {
                    articles.map(article => (
                      <SwiperSlide key={article} className={styles.sliderWrapper}>
                        <div key={article} className={styles.previewBox} onClick={() => router.push(`/article/lorem-ipsum`)} >
                          <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                          <div className={styles.articleTextContainer}>
                            <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                            <p className={styles.articleDate}>Jum, 20 okt 21</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              <div className={styles.articleContainerMobile}>
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
                <p className={styles.event}>Live Classes</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.articleContainerDesktop}>
                <Swiper
                  slidesPerView={5}
                  centeredSlides={true}
                  spaceBetween={200}
                  initialSlide={2}
                  navigation
                  freeMode={true}
                  className="mySwiperarLive">
                  {
                    articles.map(article => (
                      <SwiperSlide key={article} className={styles.sliderWrapper}>
                        <div key={article} className={styles.previewBox} onClick={() => router.push(`/class/${`Welcome to NEW JIC ${article}`.toLocaleLowerCase().split(' ').join('-')}`)} >
                          <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                          <div className={styles.previewTextContainer}>
                            <p className={styles.previewDate}>Jum, 20 okt 21 &#183; 19.00 WIB</p>
                            <h2 className={styles.previewTitle}>Welcome to NEW JIC {article}</h2>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              <div className={styles.contentContainer}>
                {
                  articles.map(article => (
                    <div key={article} className={styles.previewBox} onClick={() => router.push(`/class/${`Welcome to NEW JIC ${article}`.toLocaleLowerCase().split(' ').join('-')}`)} >
                      <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                      <div className={styles.previewTextContainer}>
                        <p className={styles.previewDate}>Jum, 20 okt 21 &#183; 19.00 WIB</p>
                        <h2 className={styles.previewTitle}>Welcome to NEW JIC {article}</h2>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className={styles.contentWrapper} >
              <div className={styles.textWrapper}>
                <p className={styles.event}>New JIC Roadmap</p>
                <p className={styles.action}>Lihat semua</p>
              </div>
              <div className={styles.articleContainerDesktop}>
                <Swiper
                  slidesPerView={4}
                  centeredSlides={true}
                  spaceBetween={200}
                  initialSlide={2}
                  navigation
                  freeMode={true}
                  className="mySwiperarLive">
                  {
                    academies.map((academy, index) => (
                      <SwiperSlide key={index} className={styles.sliderWrapper}>
                        <div className={styles.previewAcademy} onClick={() => router.push(`/roadmap/${academy.class.toLocaleLowerCase().split(' ').join('-')}`)} >
                          <img className={styles.academyImage} src={'/image-not-available.jpeg'} />
                          <div className={styles.academyTextContainer}>
                            <h2 className={styles.academyTitle}>{academy.class}</h2>
                            <div className={styles.academyLevelContainer}>
                              <p className={styles.level}>{academy.level}</p>
                              <div className={styles.video}>{academy.totalVideo} Videos</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              <div className={styles.contentContainer}>
                {
                  academies.map((academy, index) => (
                    <div key={index} className={styles.previewAcademy} onClick={() => router.push(`/roadmap/${academy.class.toLocaleLowerCase().split(' ').join('-')}`)}>
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
          </Content>
          <FooterDesktop />
          <Footer />
        </main>
      </Container>
    </div>
  )
}
