import React from 'react'
import HeroSection from '../../components/Hero/HeroSection'
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations'
import Blogs from '../../components/Blogs/Blogs'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import TravelGallery from '../../components/TravelGallery/TravelGallery'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <Blogs />
      <WhyChooseUs />
      <TravelGallery />
      <Testimonials />
    </>
  )
}

export default Home
