import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "MD Amdad Islam",
    country: "Bangladesh",
    img: "https://avatars.githubusercontent.com/u/195456266?v=4",
    rating: 5,
    quote:
      "The trip to Switzerland was absolutely magical! Everything was perfectly organized. Highly recommended!",
  },
  {
    id: 2,
    name: "Zahidul Islam Mahim",
    country: "Bangladesh",
    img: "https://avatars.githubusercontent.com/u/92626624?v=4",
    rating: 4,
    quote:
      "Bali stole my heart! The culture, beaches, and people were amazing. Can’t wait to travel again!",
  },
  {
    id: 3,
    name: "Md Rijoan Maruf",
    country: "Bangladesh",
    img: "https://avatars.githubusercontent.com/u/78620963?v=4",
    rating: 5,
    quote:
      "I loved the desert safari in Dubai! The guides were so friendly and the views were breathtaking.",
  },
  {
    id: 4,
    name: "LITAN MOLLA",
    country: "Bangladesh",
    img: "https://avatars.githubusercontent.com/u/185999515?v=4",
    rating: 5,
    quote:
      "Global Wanderer made my Japan trip unforgettable! Smooth booking, great support, and amazing experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          💬 Traveler <span className="text-purple-600">Testimonials</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Hear from our happy travelers who explored the world with us.  
          Their stories speak for themselves!
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white/60 backdrop-blur-md border border-purple-100 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-500">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-300 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{t.country}</p>

                {/* Rating Stars */}
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic leading-relaxed">
                  “{t.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
