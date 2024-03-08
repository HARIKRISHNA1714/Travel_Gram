import React from 'react';
import CarouselCard from './CarouselCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { nav } from './Data';

const Carousel = () => {
  return (
    <div className='m-10'>
      <h3>Let's Begin Journey</h3>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {nav.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Ensure Link is within the Router context */}
            <Link to={item.path}>
              <CarouselCard image={item.image} title={item.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
