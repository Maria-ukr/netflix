import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import slide2 from '@/assets/images/slides/cover2.png';
import slide3 from '@/assets/images/slides/cover3.png';
import slide4 from '@/assets/images/slides/cover4.png';
import slide5 from '@/assets/images/slides/cover5.png';
import slide6 from '@/assets/images/slides/cover6.png';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.scss';

function Slider() {
  const movies = [
    slide5,
    slide2,
    slide3,
    slide4,
    slide4,
    slide4,
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
        spaceBetween={20}
        slidesPerView={5.5}
        dir='rtl'
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className={styles.swiper}
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
