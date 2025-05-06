// Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    name: "Anjali Sharma",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "HerCode helped me boost my confidence and land my dream internship!",
  },
  {
    name: "Riya Mehta",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "The community is so supportive. I felt heard and empowered!",
  },
  {
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Workshops and mentors here are top-notch. Loved the experience!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container text-center">
        <h2 className="section-title text-white mb-5">What Our Girls Say</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} className="testimonial-img" />
                <p className="testimonial-text">“{item.text}”</p>
                <h5 className="testimonial-name">{item.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
