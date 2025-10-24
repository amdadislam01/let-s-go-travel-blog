import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    title: "Maldives Paradise",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1000&q=80",
    title: "Santorini, Greece",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    title: "Swiss Alps Adventure",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    title: "Tokyo Nights",
  },
  {
    id: 5,
    url: "https://forevertourism.com/wp-content/uploads/2025/04/Top-10-Activities-to-Try-in-Dubai-Desert-Safari-1.webp",
    title: "Dubai Desert Safari",
  },
  {
    id: 6,
    url: "https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/67bc470c6ead235aa8f0ce45_Yeh%20Ho%20Waterfall.webp",
    title: "Bali Waterfall Escape",
  },
];

const TravelGallery = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20 px-6 lg:px-12">
      <div className="max-w-[1580px] mx-auto text-center px-5 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
           Travel <span className="text-purple-600">Gallery</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover stunning destinations captured by our travelers from around
          the world. Let the wanderlust begin!
        </p>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl shadow-lg"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="relative group">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-[500px] object-cover rounded-2xl brightness-90 group-hover:brightness-75 transition duration-500"
                />
                <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-white text-2xl font-semibold bg-black/40 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelGallery;
