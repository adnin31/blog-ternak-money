import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../components/container'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '../styles/Home.module.css'

SwiperCore.use([Pagination, Navigation])

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
      scrollbar={{ draggable: true }}
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header className={styles.header}>
            <h1 className={styles.title}>NEW JIC</h1>
            <div className={styles.desktopHeader}>
              <a className={styles.menu} onClick={() => router.push('/news')}>News</a>
              <a className={styles.menu} >Classes</a>
              <a className={styles.menu}>Member</a>
              <a className={styles.menu} onClick={() => router.push('/login')}>Sign In</a>
            </div>
            <img className={styles.chatLogo} src='/icons8-chat-100-white.png'/>
          </Header>

          <Content>
            {/* <div className={styles.menu}>
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
            </div> */}
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
                {
                  articles.map(article => (
                    <div key={article} className={styles.previewBox} onClick={() => router.push(`/article/lorem-ipsum`)} >
                      <img className={styles.previewImage} src={'/image-not-available.jpeg'} />
                      <div className={styles.articleTextContainer}>
                        <h2 className={styles.articleTitle}>Lorem Ipsum</h2>
                        <p className={styles.articleDate}>Jum, 20 okt 21</p>
                      </div>
                    </div>
                  ))
                }
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
          <div className={styles.footerDesktop}>
            <div className={styles.footerContainer}>
              <h2>Explore</h2>
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

            <div className={styles.footerContainer}>
              <h2>About</h2>
              <div className={styles.menuBox}>
                <p className={styles.nameBox}>Careers</p>
              </div>
              <div className={styles.menuBox}>
                <p className={styles.nameBox}>Privacy</p>
              </div>
              <div className={styles.menuBox}>
                <p className={styles.nameBox}>Terms</p>
              </div>
              <div className={styles.menuBox}>
                <p className={styles.nameBox}>Social Impact</p>
              </div>
              <div className={styles.menuBox}>
                <p className={styles.nameBox}>Support</p>
              </div>
            </div>

            <div className={styles.footerContainer}>
              <h2>Social</h2>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-twitter-60.png' />
                <p className={styles.nameBox}>Twitter</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-instagram-48.png' />
                <p className={styles.nameBox}>Instagram</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-facebook-30.png' />
                <p className={styles.nameBox}>Facebook</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-youtube-48.png' />
                <p className={styles.nameBox}>Youtube</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-linkedin-30.png' />
                <p className={styles.nameBox}>Linkedin</p>
              </div>
            </div>

            <div className={styles.footerContainer}>
              <h2>Payment Method</h2>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-visa-100.png' />
                <p className={styles.nameBox}>Visa</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-mastercard-96.png' />
                <p className={styles.nameBox}>Mastercard</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-american-express-100.png' />
                <p className={styles.nameBox}>American Express</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-paypal-50.png' />
                <p className={styles.nameBox}>Paypal</p>
              </div>
              <div className={styles.menuBox}>
                <img className={styles.logoBox} src='/icons8-jcb-50.png' />
                <p className={styles.nameBox}>JCB</p>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </Container>
    </div>
  )
}
