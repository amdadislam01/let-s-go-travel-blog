import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80",
      title: "Explore The World With Us 🌍",
      subtitle: "Discover breathtaking places and new adventures",
      btn: "Get Started",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
      title: "Find Your Perfect Destination ✈️",
      subtitle: "Plan your dream trip with ease and comfort",
      btn: "Book Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1500&q=80",
      title: "Adventure Awaits You ⛰️",
      subtitle: "Unleash your wanderlust with our travel guide",
      btn: "Explore More",
    },
  ];

  return (
    <div className="w-full h-[95vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade" 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2500} 
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ease-in-out scale-105 swiper-slide-active:scale-100"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 max-w-2xl drop-shadow-md animate-fadeIn delay-200">
                  {slide.subtitle}
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg animate-fadeIn delay-300">
                  {slide.btn}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .swiper-slide div.bg-cover {
          transform: scale(1.1);
          opacity: 0.8;
          transition: transform 4s ease-in-out, opacity 1.5s ease-in-out;
        }
        .swiper-slide-active div.bg-cover {
          transform: scale(1);
          opacity: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
