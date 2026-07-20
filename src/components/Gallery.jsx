import "../styles/gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/imges/gallery/photo1.jpg",
  "/imges/gallery/photo2.jpg",
  "/imges/gallery/photo3.jpg",
  "/imges/gallery/photo4.jpg",
  "/imges/gallery/photo5.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section">

      <h2>📸 उत्सवाची झलक</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}