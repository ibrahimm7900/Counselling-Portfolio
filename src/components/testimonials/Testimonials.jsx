import React from 'react'
import { Data } from './Data'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials container section">
        <h2 className="section_title">Testimonials</h2>
        <span className="section_subtitle">My clients say</span>

        <Swiper className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }}
        modules={[Pagination]}>
            {Data.map(({id, image, title, description }) => {
                return (
                    <SwiperSlide className="testimonial_card" key={id}>
                        <img src={image} alt="" 
                        className='testimonial_img'/>

                        <h3 className="testimonial_name">{title}</h3>
                        <p className="testimonial_description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials
