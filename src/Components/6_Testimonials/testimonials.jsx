import React from "react";
// import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/P1.png";
import image2 from "../../assets/P2.jpg";
import image3 from "../../assets/P3.jpg";
import image4 from "../../assets/P4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Format from "./5_1_format/format";

import { Autoplay, Pagination, Navigation } from "swiper";

import "../../Components/6_Testimonials/testimonials.css";

const testimonials = () => {
  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>WHAT CUTOMER SAYS</h3>
        </div>
        <div className="heading-d">
          <h1>RECENT REVIEWS</h1>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Format
            image={image1}
            name="Rishabh Shukla"
            work="Developer"
            comment="A promising and reliable platform for event hosting and managing smooth rollout of entry passes. Very much impressed with the cutomer support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image2}
            name="Arpit Sharma"
            work="Developer"
            comment="A promising and reliable platform for event hosting and managing smooth rollout of entry passes. Very much impressed with the cutomer support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image3}
            name="Yatendra Sharma"
            work="Developer"
            comment="A promising and reliable platform for event hosting and managing smooth rollout of entry passes. Very much impressed with the cutomer support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Format
            image={image4}
            name="Rishiraj Singh"
            work="Tester"
            comment="A promising and reliable platform for event hosting and managing smooth rollout of entry passes. Very much impressed with the cutomer support"
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default testimonials;
