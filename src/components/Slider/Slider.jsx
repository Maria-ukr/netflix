import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import slide1 from './../../assets/images/slides/cover1.jpg';
import slide7 from './../../assets/images/slides/cover7.jpg';
import slide2 from './../../assets/images/slides/cover2.png';
import slide3 from './../../assets/images/slides/cover3.png';
import slide4 from './../../assets/images/slides/cover4.png';
import slide5 from './../../assets/images/slides/cover5.png';
import slide6 from './../../assets/images/slides/cover6.png';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.scss';

function Slider() {
  const movies = [
    slide5,
    slide7,
    slide2,
    slide3,
    slide1,
    slide4,
    slide5,
    slide6,
  ];
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>POPULAR THIS WEEK</p>
        <button ref={navigationPrevRef} className={styles.prev}></button>
        <button ref={navigationNextRef} className={styles.next}></button>
      </div>
      <Swiper
        dir='rtl'
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className={styles.swiper}
        slidesPerView={5.5}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((el) => (
          <SwiperSlide key={el}>
            <img src={el} alt='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
